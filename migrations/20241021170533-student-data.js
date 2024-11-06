'use strict';

const { Sequelize } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up : async (queryInterface , Sequelize) => {
   await queryInterface.createTable('students', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false
      },
      name : {
        type : Sequelize.STRING,
        allowNull : false,
      },
      class : {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      schoolName : {
        type :Sequelize.STRING,
        allowNull : false
      },
      city : {
        type : Sequelize.STRING,
        allowNull : false
      }
    })
  },

  down : async(queryInterface) => {
   await queryInterface.dropTable('students')
  }
};
