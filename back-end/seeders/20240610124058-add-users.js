const { faker } = require('@faker-js/faker')
const User = require('../models/user.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    const users = Array.from({ length: 10000 }).map(() => ({
      name      : faker.person.fullName(),
      city      : faker.location.city(),
      created_at: new Date(),
    }))

    await User.bulkCreate(users)
  },
}
