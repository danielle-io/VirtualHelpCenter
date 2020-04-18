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
    const ids = req.params.id;
    StaffModel.findById(ids, (err, staff)=>{
        res.send(staff);
    });
});

module.exports = router;