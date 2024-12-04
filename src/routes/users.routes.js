import express from "express";

const router = express.Router();

// getting all users
router.get("/users", (req, res) => {
  res.send("getting all users");
});

// get a user by id
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send("getting a user");
});

// create a user
router.post("/users", (req, res) => {
  res.send("creating a users");
});

// delete a user by id
router.delete("/users/:id", (req, res) => {
  res.send("deleting a user");
});

// update a user by id
router.put("/users/:id", (req, res) => {
  res.send("updating a  user");
});

export default router;
