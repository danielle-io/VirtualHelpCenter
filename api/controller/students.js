const {Router} = require('express');
const router = Router();

let StudentModel = require('../model/students');

//GET Student Listing
router.get('/students',(req,res,next) => {
    StudentModel.find({}, (err, students) => {
        if (err) return console.error(err);
        res.send(students);
    })
});

// GET student by id
router.get('/getStudentsById/:id', (req, res, next) => {
    // console.log(req.params.id);
    const ids = req.params.id;
    StudentModel.findById(ids, (err, student)=>{
        // console.log(student);
        res.send(student);
    });
})

router.post('/insertStudent', function(req, res, next) {
    let studentData = new StudentModel(req.body);
    console.log(studentData);
    studentData.save().then(item => {
        res.send(item);
    })
    .catch(err => {
        res.status(400).send(err);
    });
})

module.exports = router;