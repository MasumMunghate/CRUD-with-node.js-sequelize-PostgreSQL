'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize)=> {
    queryInterface.changeColumn('students','status',{
      type: Sequelize.ENUM,
      values : ['process','register'],
      defaultValue : 'process',
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize)=> {
    queryInterface.removeColumn('students','status',{
      type: Sequelize.ENUM,
      values : ['process','register', 'pending', 'completed'],
      defaultValue : 'process',
    })
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
