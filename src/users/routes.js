const { Router } = require("express");
const userRouter = Router();

const { hashPass, comparePass} = require("../middleware/auth");

const {signupUser, login} = require("./controllers");

userRouter.post("/users/signup", hashPass, signupUser);

userRouter.post("/users/login", comparePass, login);

module.exports = userRouter;