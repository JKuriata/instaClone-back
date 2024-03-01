const { Router } = require("express");
const userRouter = Router();

const {signupUser, login} = require("./controllers");

userRouter.post("/users/signup", signupUser);

userRouter.post("/users/login", login);

module.exports = userRouter;