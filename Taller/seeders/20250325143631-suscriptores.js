'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = [
      {
        nombre: "Jordan Mendoza",
        email: "jordanmendoo@gmail.com",
        fecha_registro: new Date(),
      
      },
      {
        nombre: "Carlos Ruiz",
        email: "carlos@example.com",
        fecha_registro: new Date(),
       
      }
    ];

    return queryInterface.bulkInsert('suscriptores', data);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('suscriptores', null, {});
  }
};
