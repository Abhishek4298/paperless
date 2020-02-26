
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'employees',
     [
      {
      
        id:2,
        createdAt:new Date(),
        modifiedAt: new Date(),
        deletedAt:new Date(),
        createdBy:1,
        modifiedBy:1,
        employee_categories:2,
        isActive:true,
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => {
  
       return queryInterface.bulkDelete('employees', null, {});
  },
};
