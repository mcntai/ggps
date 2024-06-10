const { DataTypes } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserImage', {
      id        : {
        allowNull    : false,
        autoIncrement: true,
        primaryKey   : true,
        type         : DataTypes.INTEGER,
      },
      image     : {
        type     : DataTypes.BLOB('long'),
        allowNull: false,
      },
      created_at: {
        allowNull   : false,
        type        : DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      user_id   : {
        type      : DataTypes.INTEGER,
        allowNull : false,
        references: {
          model: 'User',
          key  : 'id',
        },
        onUpdate  : 'CASCADE',
        onDelete  : 'CASCADE',
      },
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('UserImage')
  },
}
