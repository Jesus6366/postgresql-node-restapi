import express from "express";
import { createUser, getUsers } from "../controllers/users.controllers.js";
const router = express.Router();

// getting all users
router.get("/users", getUsers);

// get a user by id
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send("getting a user");
});

// create a user
router.post("/users", createUser);

// delete a user by id
router.delete("/users/:id", (req, res) => {
  res.send("deleting a user");
});

// update a user by id
router.put("/users/:id", (req, res) => {
  res.send("updating a  user");
});

export default router;
