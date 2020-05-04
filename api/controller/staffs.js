const {Router} = require('express');
const router = Router()

var StaffModel = require('../model/staffs')

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

router.post('/insertStaff', function(req, res, next) {
    let staffData = new StaffModel(req.body);
    staffData.save().then(item => {
        res.send(item);
    })
    .catch(err => {
        res.status(400).send(err);
    });
})

module.exports = router;