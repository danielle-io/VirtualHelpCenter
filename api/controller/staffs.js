const {Router} = require('express');
const router = Router();

let Staff = require('../model/staffs')

//GET Staff Listing
router.get('/staffs', (req,res,next) =>{
    Staff.find({}, (err, staff) => {
        if(err) return console.log(err);
        res.send(staff);
    });
});

//GET staff by id
router.get('/staffs/:id', (req, res, next) => {
    const ids = req.params.id;
    Staff.findById(ids, (err, staff)=>{
        res.send(staff);
    });
});

router.post('/insertStaff', function(req, res, next) {
    let staffData = new Staff(req.body);
    staffData.save().then(item => {
        res.send(item);
    })
    .catch(err => {
        res.status(400).send(err);
    });
})

module.exports = router;