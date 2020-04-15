const {Router} = require('express');
const router = Router()

var StaffModel = require('../model/students')

//GET Staff Listing
router.get('/staffs', (req,res,next) =>{
    StaffModel.find({}, (err, staff) => {
        if(err) return console.log(err);
        res.send(staff);
    });
});

//GET staff by id
router.get('/staffs/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    if(id >= 0 && id <staff.length){
        res.json(staff[id]);
    } else{
        res.sendStatus(404);
    }
});

module.exports = router;