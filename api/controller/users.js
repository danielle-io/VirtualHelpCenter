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

// // POST user
// router.post('/insertUser', function(req, res, next) {
//     let userData = newUserModel(req, body);
//     console.log('User data before insert');
//     console.log(ticketData);
//     console.log('============');
//     userData.save().then(item => {
//         res.send(item);
//     })
//     .catch(err => {
//         res.status(400).send("unable to save to database")
//     });
// })

//GET user by id
router.get('/user/:id', (req, res, next) => {
    const id = parseInt(req.params.id)
    if (id >= 0 && id < user.length){
        res.json(users[id])
    } else{
        res.sendStatus(404)
    }
})

module.exports = router