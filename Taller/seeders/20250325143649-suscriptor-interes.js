'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = [
      { SuscriptorId: 1, InteresId: 1 },
      { SuscriptorId: 1, InteresId: 2 },
      { SuscriptorId: 2, InteresId: 3 },
      { SuscriptorId: 2, InteresId: 4 },
    ];

    return queryInterface.bulkInsert('suscriptorinteres', data);
  },
  

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('suscriptorinteres');
  }
};
