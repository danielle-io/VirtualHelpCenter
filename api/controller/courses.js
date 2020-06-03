const { Router } = require("express");
const router = Router();

let CourseModel = require("../model/courses");

//GET Course Listing
router.get("/courses", (req, res, next) => {
  // CourseModel.find({}, (err, courses) => {
  //     if(err) return console.error(err);
  //     res.send(courses);
  // })

  var query = CourseModel.find({ deleted: 0 });

  query.exec(function(err, courses) {
    if (err) return handleError(err);
    res.send(courses);
  });
});

//GET course by id
router.get("/courses/:id", (req, res, next) => {
  const ids = req.params.id;
  CourseModel.findById(ids, (err, course) => {
    res.send(course);
  });
});

router.put("/courses/updateCourse/:id", function(req, res, next) {
  const id = req.params.id;
  console.log("user id is " + id);
  CourseModel.updateOne({ _id: id }, { $set: req.body }, function(
    err,
    ticket
  ) {});
});

router.post("/insertCourse", function(req, res, next) {
  let courseData = new CourseModel(req.body);
  courseData
    .save()
    .then((item) => {
      res.send(item);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
