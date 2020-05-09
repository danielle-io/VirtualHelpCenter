var TutorModel = require('../model/tutors');

const{Router} = require('express');
const router = Router();

//GET Tutor Listing
router.get('/tutors', (req,res,next) =>{
    CourseModel.find({}, (err, tutors) => {
        if(err) return console.error(err);
        res.send(tutors);
    })
})

//GET course by id
router.get('/tutors/:id', (req, res, next) => {
    const ids = req.params.id;
    TutorModel.findById(ids, (err, tutor)=>{
        res.send(tutor);
    });
})

router.post('/insertTutor', function(req, res, next) {
    let tutorData = new TutorModel(req.body);
    tutorData.save().then(item => {
        res.send(item);
    })
    .catch(err => {
        res.status(400).send(err);
    });
})

module.exports = router