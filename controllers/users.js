const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../schema/user");
const db = require("../db/connection");
require("dotenv").config();

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
const TOKEN_KEY = process.env.TOKEN_KEY;

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({
      username,
      email,
      password_digest,
    });
    await user.save();
    const payload = {
      username: user.username,
      email: user.email,
    };
    const token = jwt.sign(payload, TOKEN_KEY);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        username: user.username,
        email: user.email,
      };
      const token = jwt.sign(payload, TOKEN_KEY);
      res.status(201).json({ token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const verify = async (req, res) => {
  try {
    console.log(req);
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      res.json(payload);
    }
  } catch (e) {
    res.status(401).send("Not Authorized");
  }
};

const changePassword = async (req, res) => {
  try {
    //find the user that we're changing the password
    //req = username, oldpassword, newpassword
    const { username, password, newPassword } = req.body;
    const user = await User.findOne({ username: username });

    //verify the old password against the password stored in the database
    if (await bcrypt.compare(password, user.password_digest)) {
      //hash the new password
      const password_digest = await bcrypt.hash(newPassword, SALT_ROUNDS);
      //replace the old password_digest with the new password_digest
      user.password_digest = password_digest;
      const payload = await user.update({ password_digest: password_digest });
      const token = jwt.sign(payload, TOKEN_KEY);
      res.status(201).json({ token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  signUp,
  signIn,
  verify,
  changePassword,
};
