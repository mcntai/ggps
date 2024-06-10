const { DataTypes } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('User', {
      id        : {
        allowNull    : false,
        autoIncrement: true,
        primaryKey   : true,
        type         : DataTypes.INTEGER,
      },
      name      : {
        type     : DataTypes.STRING,
        allowNull: false,
      },
      city      : {
        type: DataTypes.STRING,
      },
      created_at: {
        allowNull   : false,
        type        : DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('User')
  },
}
