const {Router} = require('express');
const router = Router();

var StudentModel = require('../model/students');

//GET Student Listing
router.get('/students',(req,res,next) => {
    StudentModel.find({}, (err, students) => {
        if (err) return console.error(err);
        res.send(students);
    })
});

// GET student by id
router.get('/students/:id', (req, res, next) => {
    const ids = req.params.id;
    StudentModel.findById(ids, (err, student)=>{
        res.send(student);
    });
})

module.exports = router;