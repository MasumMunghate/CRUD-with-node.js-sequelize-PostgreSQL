'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 up : async (queryInterface , Sequelize)=>{
  await queryInterface.addColumn('students' , 'studntage',{
      type : Sequelize.INTEGER,
      allowNull : false,
      defaultValue: 0
  })
 },
  down : async(queryInterface , Sequelize)=>{
    queryInterface.dropTable('students')
  }
};

// while adding new colum in existing table with data add default value in it so 