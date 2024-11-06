const {
  addnewStudent,
  getAllStudent,
  updateStudent,
  deletStudentData,
} = require("../controller/student.controller.js");
const validate = require("../middlewares/validate.js");
const { studentValidate } = require("../validation/student.validation.js");
const student = require("../validation/student.validation.js");
const router = require("express").Router();

router
  .route("/createstudent")
  .post(validate(studentValidate), addnewStudent);

router
  .route("/getallstudent")
  .get(validate(student.allStudentValidate), getAllStudent);

router
  .route("/updatestudent/:id")
  .put(validate(student.updateStudentValidate), updateStudent);

router
  .route("/deletestudent/:id")
  .delete(validate(student.deleteValidation), deletStudentData);

module.exports = router;
