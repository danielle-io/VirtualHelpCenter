const {Router} = require('express');
const router = Router();

let Staff = require('../model/staff')

//GET Staff Listing
router.get('/staff', (req,res,next) =>{
    Staff.find({}, (err, staff) => {
        if(err) return console.log(err);
        res.send(staff);
    });
});

//GET staff by id
router.get('/staff/:id', (req, res, next) => {
    const ids = req.params.id;
    Staff.findById(ids, (err, staff)=>{
        res.send(staff);
    });
});

router.post('/insertStaff', function(req, res, next) {
    let staffData = new Staff(req.body);
    console.log(staffData);
    staffData.save().then(item => {
        res.send(item);
    })
    .catch(err => {
        res.status(400).send(err);
    });
})

module.exports = router;