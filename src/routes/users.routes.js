import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/users.controllers.js";
const router = express.Router();

// getting all users
router.get("/users", getUsers);

// get a user by id
router.get("/users/:id", getUserById);

// create a user
router.post("/users", createUser);

// delete a user by id
router.delete("/users/:id", deleteUser);

// update a user by id
router.put("/users/:id", updateUser);

export default router;
