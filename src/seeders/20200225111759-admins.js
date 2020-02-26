
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'admins',
     [
      {
        id: 1,
        Fname: 'Abhishek',
        Lname: 'Bhavsar',
        Email: 'Abhi@gmail.com',
        Role:true,
        Password: '123',
        isActive: true,
        contact:'7227885771',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('admins', null, {});
  },
};
