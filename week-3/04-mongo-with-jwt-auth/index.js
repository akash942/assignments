const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.urlencoded({extended: true}));
app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.listen(3000, () => {
    console.log(`Server is up`);
});
    