const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Admin, User, Course } = require("../db/index.js");

// User Routes
<<<<<<< HEAD
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  let username = req.headers.username;
  let pass = req.headers.password;
  console.log(req.body);
  console.log(username);
  await User.create({ username: username, password: pass });
  res.status(200).json({ msg: "User created successfully" });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  let response = await Course.find({});
  res.status(200).json({ courses: response });
});

router.post("/courses/:courseid", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  let courseId = req.params.courseid;
  let user = await User.findOne({
    username: req.headers.username,
    password: req.headers.password,
  });
  let response = await User.findOneAndUpdate(
    { _id: user.id },
    { $push: { purchases: courseId } }
  );

  res.status(200).json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  console.log(req.headers.username);
  let user = await User.findOne({username: req.headers.username,  password: req.headers.password}).populate('purchases')
  console.log(user);
  res.status(200).json({courses: user.purchases})
});

module.exports = router;
=======
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router
>>>>>>> c428b9699bf630c5f3d6b445655d9717a893fd4c
