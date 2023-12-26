const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const admin = require("./routes/admin")
const user = require("./routes/user")

// Middleware for parsing request bodies
app.use(bodyParser.urlencoded({extended: true}));       
// app.use("/admin", adminRouter);
// app.use("/user", userRouter);


app.use("/admin", admin)
app.use("/user", user)

<<<<<<< HEAD
app.listen(3000, () => {
  console.log(`Server is running on port up`);
=======
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
>>>>>>> c428b9699bf630c5f3d6b445655d9717a893fd4c
});
