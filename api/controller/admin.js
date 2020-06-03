const {Router} = require('express');
const router = Router();

let Admin = require('../model/admin')

//GET Admin Listing
router.get('/admin', (req,res,next) =>{
    Admin.find({}, (err, admin) => {
        if(err) return console.log(err);
        res.send(admin);
    });
});

//GET admin by id
router.get('/admin/:id', (req, res, next) => {
    const ids = req.params.id;
    Admin.findById(ids, (err, admin)=>{
        res.send(admin);
    });
});

router.post('/insertAdmin', function(req, res, next) {
    let adminData = new Admin(req.body);
    console.log(adminData);
    adminData.save().then(item => {
        res.send(item);
    })
    .catch(err => {
        res.status(400).send(err);
    });
})

module.exports = router;