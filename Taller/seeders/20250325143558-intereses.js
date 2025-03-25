'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const intereses = [
      "Tecnología",
      "Ciberseguridad",
      "Desarrollo de Software",
      "Inteligencia Artificial",
      "Ciencia de Datos",
      "Blockchain",
      "Internet de las Cosas (IoT)",
      "Marketing Digital",
      "Videojuegos",
      "Finanzas y Criptomonedas"
    ];

    const data = intereses.map(desc => ({
      descripcion: desc,
    }));

    return queryInterface.bulkInsert('intereses', data);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('intereses', null, {});
  }
};
