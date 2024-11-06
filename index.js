const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const studentRoute = require('./route/student.route.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1',studentRoute);

app.listen(8080, ()=>{
    console.log("app is runnning on port 8080");
    
})