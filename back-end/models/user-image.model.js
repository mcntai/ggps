const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const UserImage = sequelize.define('UserImage', {
    id        : {
      type         : DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey   : true,
    },
    image     : {
      type     : DataTypes.BLOB('long'),
      allowNull: false,
    },
    created_at: {
      type        : DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'UserImage',
    timestamps: false,
  })

module.exports = UserImage
