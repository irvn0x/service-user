"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Kanna Hashimoto",
        profession: "Administrator",
        role: "admin",
        email: "kanna@gmail.com",
        password: await bcrypt.hash("admin123", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Sandhika Galih",
        profession: "Lecturer",
        role: "lecturer",
        email: "sandhika@gmail.com",
        password: await bcrypt.hash("sandhika", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kai Havertz",
        profession: "Fullstack Developer",
        role: "student",
        email: "kai@gmail.com",
        password: await bcrypt.hash("kai", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
