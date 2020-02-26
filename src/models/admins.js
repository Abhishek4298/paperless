
"use strict";
module.exports = (sequelize, DataTypes) => {
  const Admins = sequelize.define(
    "Admins",
    {
      Fname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Lname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false
      },

      Role: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },

      Password: {
        type: DataTypes.STRING,
        allowNull: false
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );

  }
  Admins.associate = function(models) {
    // associations can be defined here
  };