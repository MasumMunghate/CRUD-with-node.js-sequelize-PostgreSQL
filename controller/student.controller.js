const {
  createStudent,
  retriveAllStudent,
  updatePerticularData,
  deletStudentById,
} = require("../services/student.service");


const addnewStudent = async (req, res) => {
  try {
    const newStudent = await createStudent(req);
    if (!newStudent) {
      res.status(500).send({ message: "User not Created" });
      return;
    }
    res
      .status(200)
      .send({ message: "Successfully add student data !", newStudent });
    return;
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error " });
    return;
  }
};

const getAllStudent = async (req, res) => {
  const allStudent = await retriveAllStudent(req);
  if(allStudent.length === 0){
    res.status(500).send({ message: "User not Created"});
    return;
  }
  res.status(200).json({ message: "Get All data !", allStudent });
};

const updateStudent = async (req, res) => {
  const singlestudent = updatePerticularData(req);
  if (singlestudent[0] === 0) {
    res.status(400).json({ message: "No student data Updated ! !" });
    return;
  }
  res
    .status(200)
    .json({ message: "Update student data successfully ! !", singlestudent });
    return;
};

const deletStudentData = async (req, res) => {
  const deletStudent = deletStudentById(req);
  res
    .status(200)
    .json({ message: "Student data sussessfully deleted !", deletStudent });
    return;
};
module.exports = {
  addnewStudent,
  getAllStudent,
  updateStudent,
  deletStudentData,
};
