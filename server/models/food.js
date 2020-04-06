'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Food extends Model { }

  Food.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Title Cannot be Empty'
          }
        }
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Price Cannot be Empty'
          }
        }
      },
      ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Ingredients Cannot be Empty'
          }
        }
      },
      tag: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'tag Cannot be Empty'
          }
        }
      }
    }, { sequelize })
  Food.associate = function (models) {
    // associations can be defined here
  };
  return Food;
};