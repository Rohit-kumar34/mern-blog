import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  //   if (
  //     !username ||
  //     !email ||
  //     password ||
  //     username === "" ||
  //     email === "" ||
  //     password === ""
  //   ) {
  //     res.status(400).json({ message: "All fields are required" });
  //   }
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.json({ message: "User created successfully" });
  } catch (error) {
    res.json(error.message);
  }
};
