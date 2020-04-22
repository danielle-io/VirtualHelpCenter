var UserModel = require('../model/users');

const {Router} = require('express');
const router = Router();

//GET User Listing
router.get('/users',(req,res,next) => {
    UserModel.find({}, (err, users) => {
        if(err) return console.error(err);
        res.send(users);
    })
})

//GET user by id
router.get('/users/:id', (req, res, next) => {
    const ids = req.params.id;
    UserModel.findById(ids, (err, user)=>{
        res.send(user);
    });
})

// POST user
router.post('/insertUser', function(req, res, next) {
    let userData = new UserModel(req.body);
    userData.save();
})

module.exports = router