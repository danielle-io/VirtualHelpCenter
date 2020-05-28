var UserModel = require('../model/users');

const {Router} = require('express');
const router = Router();

// //GET User Listing
// router.get('/users',(req,res,next) => {
//     UserModel.find({}, (err, users) => {
//         if(err) return console.error(err);
//         res.send(users);
//     })
// })

//GET user by id
router.get('/users/:id', (req, res, next) => {
    console.log("in user by id");
    const id = req.params.id;
    // console.log(id);
    UserModel.findById(id, (err, user)=>{
        res.send(user);
    });
})

// POST user
router.post('/insertUser', function(req, res, next) {
    let userData = new UserModel(req.body);
    userData.save();
})



module.exports = router