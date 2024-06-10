const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const UserImage = require('./user-image.model')

const User = sequelize.define('User', {
    id        : {
      type         : DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey   : true,
    },
    name      : {
      type     : DataTypes.STRING,
      allowNull: false,
    },
    city      : {
      type: DataTypes.STRING,
    },
    created_at: {
      type        : DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'User',
    timestamps: false,
  })

User.hasMany(UserImage, { as: 'images', foreignKey: 'user_id' })

module.exports = User
