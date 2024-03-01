const bcrypt = require("bcrypt");
const User = require("../users/model");
const saltRounds = parseInt(process.env.SALT_ROUNDS);

const hashPass = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);

    next();
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

module.exports = {
  hashPass: hashPass,
};
