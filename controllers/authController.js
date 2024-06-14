import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => { 
  try {
    const { name, email, password, phone, address } = req.body;

    console.log("Request body:", req.body);

    // Validations
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }
    if (!phone) {
      return res.status(400).json({ message: "Phone is required" });
    }
    if (!address) {
      return res.status(400).json({ message: "Address is required" });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email: email });
    console.log("Existing user:", existingUser);

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already registered, please login",
      });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);
    console.log("Hashed password:", hashedPassword);

    // Initialize and save user
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    });

    console.log("User before saving:", user);

    await user.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in registration",
    });
  }
};
export const logincontroller = async (req, res) => {
  try {
    const { email, password } = req.body;
    //VALIDATION
    if (!email || !password) {
      return res.status(404).send({
        message: "Invalid email or password",
      });
    }
    //CHECK USER
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(404).send({ message: "email is not registerd" });
    }
    //
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res
        .status(200)
        .send({ success: false, message: "Invalid password" });
    }
    //TOKEN
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in loging",
      error,
    });
  }
};
export const testcontroller = (req, res) => {
  res.send("hello protected route");
};
