const {Router} = require('express');
const router = Router();

var StudentModel = require('../model/students');

//GET Student Listing
router.get('/students',(req,res,next) => {
    // var id = "5e927be91c9d44000027d563"
    // StudentModel.findById(id, (err, student)=>{
    //     res.send(student);
    // });
    StudentModel.find({}, (err, students) => {
        if (err) return console.error(err);
        res.send(students);
    })
});

// GET student by id
router.get('/students/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    console.log(id);
    // var id = "5e927be91c9d44000027d563"
    StudentModel.findById(id, (err, student)=>{
        res.send(student);
    });
})

module.exports = router;