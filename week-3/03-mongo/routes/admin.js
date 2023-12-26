const express = require("express");
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db/index.js");
const router = Router();

// Admin Routes
<<<<<<< HEAD
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  let username = req.body.username;
  let pass = req.body.password;
  console.log(req.body);
  console.log(username);
  await Admin.create({ username: username, password: pass });
  res.status(200).json({ msg: "Admin created successfully" });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  console.log("hit");
  let admin = await Admin.findOne({username: req.headers.username, password: req.headers.password})
  // console.log("ad: ",admin.id);
  let course = {
    title: req.body.title,
    description: req.body.description,
    price: parseInt(req.body.price),
    imageLink: req.body.imageLink,
    published: req.body.published==="false" ? false : true,
    author: admin.id
  }

  let response =  await Course.create(course)

  let courseId = response.id 

  res.status(200).json({ message: 'Course created successfully', courseId: courseId })

});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  let response = await Admin.findOne({username: req.headers.username, password: req.headers.password})
  console.log(response.id);
  let courses = await Course.find({author: response.id})
  res.status(200).json({courses: courses})
=======
router.post('/signup', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
>>>>>>> c428b9699bf630c5f3d6b445655d9717a893fd4c
});

module.exports = router;
