const {Admin} = require("../db/index")

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let admin = {
        username: req.headers.username,
        password: req.headers.password
    }

    let response = await Admin.findOne(admin)
    console.log(response);
    if (response) {
        next()
    }else{
        res.status(401).json({msg: "you have to register first"})
    }

}

module.exports = adminMiddleware;  