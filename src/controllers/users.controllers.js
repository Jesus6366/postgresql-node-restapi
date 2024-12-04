import bycrypt from "bcryptjs";
import User from "../models/user.js";

// create a user (POST /api/users)
export const createUser = async (req, res) => {
  console.log(req.body);

  const { name, email, password, role } = req.body;

  // validate email
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return res.status(400).json({ error: "Email already in use " });
  }

  // hash the password

  const hashedPassword = await bycrypt.hash(password, 10);

  try {
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
};

// all users (GET /api/users)
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
};
