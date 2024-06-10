const { User, UserImage } = require('../models')
const sequelize = require('../config/database')
const { QueryTypes } = require('sequelize')

/**
 * retrieves all available users in system sorted by UserImage count
 *
 * @returns {Promise} User object array
 */
const findAll = async (offset, limit) => {
  const query = `
    SELECT
        User.id,
        User.name,
        User.city,
        COUNT(UserImage.id) AS imagesCount
    FROM
        User
    LEFT JOIN
        UserImage ON User.id = UserImage.user_id
    GROUP BY
        User.id
    ORDER BY
        imagesCount DESC
    LIMIT :offset, :limit;
  `

  return sequelize.query(query, {
    type        : QueryTypes.SELECT,
    replacements: { offset, limit },
    model       : User,
    mapToModel  : true,
  })
}

/**
 * creates new user
 *
 * @returns {Promise} Created user object
 */
const create = async (name, city, imageBuffer) => {
  let transaction

  try {
    transaction = await User.sequelize.transaction()

    const newUser = await User.create(
      { name, city },
      { transaction },
    )

    const newImage = await UserImage.create(
      { image: imageBuffer, user_id: newUser.id },
      { transaction },
    )

    await transaction.commit()

    return new User({
      id    : newUser.id,
      name  : newUser.name,
      city  : newUser.city,
      images: [
        {
          image: newImage.image,
        },
      ],
    })
  } catch (error) {
    if (transaction) await transaction.rollback()

    throw new Error('Error creating user: ' + error.message)
  }
}

module.exports = {
  findAll,
  create,
}