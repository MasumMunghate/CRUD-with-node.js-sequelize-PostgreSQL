const { where } = require("sequelize");
const db = require("../models");

async function createStudent(req) {
  const { name, section, schoolName, city } = req.body;
  try {
    const student = await db.students.create({
      name,
      section,
      schoolName,
      city,
    });
    return student;
  } catch (error) {
    console.error("Error creating student:", error);
    throw error;
  }
}

async function retriveAllStudent(req) {
  try {
    const student = await db.students.findAll();
    return student;
  } catch (error) {
    console.log("Error geting Student :", error);
    throw error;
  }
}

async function updatePerticularData(req) {
  const id = req.params.id;
  try {
    const { name, section, schoolName, city } = req.body;
    const updateStudent = await db.students.update(
      {
        name: name,
        section: section,
        city: city,
        schoolName: schoolName,
      },
      {
        where: { id: id },
      }
    );
    return updateStudent;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deletStudentById(req) {
  try {
    const id = req.params.id;
    const result = db.students.destroy({
      where: { id: id },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  createStudent,
  retriveAllStudent,
  updatePerticularData,
  deletStudentById,
};
