'use strict'

const { faker } = require('@faker-js/faker')
const UserImage = require('../models/user-image.model')
const USERS_COUNT = 10000
const IMAGES_COUNT = 100000

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {

    const userImages = []

    for (let userId = 1; userId <= USERS_COUNT; userId++) {
      userImages.push({
        image     : faker.image.avatar(),
        created_at: Date.now(),
        user_id   : userId,
      })
    }

    for (let i = USERS_COUNT + 1; i <= IMAGES_COUNT; i++) {
      userImages.push({
        image     : faker.image.avatar(),
        created_at: Date.now(),
        user_id   : faker.number.int({ min: 1, max: USERS_COUNT }),
      })
    }

    await UserImage.bulkCreate(userImages)
  },
}
