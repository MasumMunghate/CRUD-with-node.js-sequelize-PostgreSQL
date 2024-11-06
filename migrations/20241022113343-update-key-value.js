'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up : async (queryInterface, Sequelize)=> {
    await queryInterface.changeColumn('students' ,'section' ,{
      type: Sequelize.STRING,
      allowNull : true,
    })
  },

   down: async (queryInterface, Sequelize) =>{
    queryInterface.changeColumn('students','section' , {
      type: Sequelize.STRING,
      allowNull : false,
    })
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
