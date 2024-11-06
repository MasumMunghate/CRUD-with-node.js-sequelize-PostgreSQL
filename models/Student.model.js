const sequelize = require("../config/postgres.js");
const Sequelize = require("sequelize");

const student = sequelize.define(
  "students",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    schoolName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    section: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    studntage: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 12,
    },
    status: {
      type: Sequelize.ENUM,
      values: ["process", "register"],
      defaultValue: "process",
    },
  },
  {
    timestamps: false,
  }
);
module.exports = student;
