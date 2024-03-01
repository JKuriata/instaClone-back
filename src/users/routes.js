const { Router } = require("express");
const userRouter = Router();

const { hashPass} = require("../middleware/auth");

const {signupUser} = require("./controllers");

userRouter.post("/users/signup", hashPass, signupUser);

// userRouter.post("/users/login", comparePass, login);

module.exports = userRouter;