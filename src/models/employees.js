"use strict";
module.exports = (sequelize, DataTypes) => {
  const employees = sequelize.define(
    "employees",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      createdAt: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      modifiedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      createdBy: {
        type: DataTypes.STRING,
        allowNull: false
      },
      modifiedBy: {
        type: DataTypes.STRING,
        allowNull: false
      },
      employee_categories: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {}
  );
  employees.associate = function(models) {
    employees.belongsTo(models.Admins, {foreignKey: 'createdBy' });
  };
  return employees;
};
