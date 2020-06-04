const { Router } = require("express");
const router = Router();

let UserModel = require("../model/users");

// Get user by id
router.get("/users/:id", (req, res, next) => {
  console.log("in user by id");
  const id = req.params.id;
  UserModel.findById(id, (err, user) => {
    res.send(user);
  });
});

router.put("/users/updateUser/:id", function(req, res, next) {
  const id = req.params.id;
  console.log("user id is " + id);
  UserModel.updateOne({ _id: id }, { $set: req.body }, function(
    err,
    ticket
  ) {});
});

// POST user
router.post("/insertUser", function(req, res, next) {
  let userData = new UserModel(req.body);
  userData.save();
});

router.get("/users/getUserByEmail/:id", function(req, res, next) {
  const id = req.params.id;
  var query = UserModel.findOne({ email: id, deleted: 0 });

  query.exec(function(err, users) {
    if (err) return handleError(err);
    res.send(users);
  });
});

router.get("/users/getUserByType/:id", function(req, res, next) {
  const id = req.params.id;
  console.log(id);
  var query = UserModel.find({ userType: id, deleted: 0 }).sort("email");

  query.exec(function(err, users) {
    if (err) return handleError(err);
    res.send(users);
  });
});

module.exports = router;
