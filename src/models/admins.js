'use strict';
module.exports = (sequelize, DataTypes) => {
let Admins = sequelize.define('Admins', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Admins.associate = function (models) {
    Admins.hasMany(models.employees,{
      foreignKey:'id'
    });
  };
  return Admins;
};