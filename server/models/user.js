'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  const bcrypt = require('../helpers/bcrypt')

  class User extends Model { }

  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Email Cannot be Empty'
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Password Cannot be Empty'
          }
        }
      }
    }, {
    hooks: {
      beforeCreate: (instance, options) => {
        return bcrypt(instance.password)
          .then(bcrypt => {
            instance.password = bcrypt
          })
      }
    },
    sequelize
  })
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};