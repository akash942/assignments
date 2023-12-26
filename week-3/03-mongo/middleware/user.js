const {User} = require("../db/index")

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let user = {
        username: req.headers.username,
        password: req.headers.password
    }

    let response = await User.findOne(user)
    console.log(response);
    if (response) {
        next()
    }else{
        res.status(401).json({msg: "you have to register first"})
    }
}

module.exports = userMiddleware;