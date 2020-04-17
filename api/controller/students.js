const {Router} = require('express');
const router = Router();

var StudentModel = require('../model/students');

//GET Student Listing
router.get('/students',(req,res,next) => {
    StudentModel.find({}, (err, students) => {
        if (err) return console.error(err);
        res.send(students);
    })
})

// GET student by id
router.get('/students/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < student.length){
        res.json(student[id]);
    } else{
        res.sendStatus(404);
    }
})

module.exports = router;