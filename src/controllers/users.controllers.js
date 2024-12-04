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

// get a user (GET /api/users/:id)
export const getUserById = async (req, res) => {
  const { id } = req.params;

  console.log(id);

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user" });
  }
};

// update a user (PUT /api/users/:id)
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, role } = req.body;

  console.log(id, name, role);

  try {
    const user = await User.findByPk(id);
    console.log(user);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // update user

    user.name = name;
    user.role = role;
    await user.save();

    console.log(user);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error updating a user" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Delete the user
    await user.destroy();
    res.status(204).json({ message: "User deleted succesfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting user." });
  }
};
