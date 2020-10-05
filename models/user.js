'use strict';
const { Model } = require('sequelize');
const isAfter = require('date-fns/isAfter');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        field: 'first_name',
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        field: 'last_name',
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
          idBefore(v) {
            if (isAfter(new Date(v), new Date())) {
              throw new Error('birthday value must be correct');
            }
          },
        },
      },
      isMale: {
        type: DataTypes.BOOLEAN,
        field: 'is_male',
      },
      passwordHash: {
        allowNull: false,
        type: DataTypes.TEXT,
        field: 'password_hash',
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      underscored: true,
    }
  );
  return User;
};
