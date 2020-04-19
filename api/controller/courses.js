var CourseModel = require('../model/courses');

const{Router} = require('express');
const router = Router();

//GET Course Listing
router.get('/courses', (req,res,next) =>{
    CourseModel.find({}, (err, courses) => {
        if(err) return console.error(err);
        res.send(courses);
    })
})

//GET course by id
router.get('/courses/:id', (req, res, next) => {
    const ids = req.params.id;
    CourseModel.findById(ids, (err, course)=>{
        res.send(course);
    });
})

router.post('/insertCourse', function(req, res, next) {
    let courseData = new CourseModel(req.body);
    courseData.save().then(item => {
        res.send(item);
    })
    .catch(err => {
        res.status(400).send(err);
    });
})

module.exports = router