import express from "express";
import userRoutes from "./routes/users.routes.js";
import dotenv from "dotenv";
import sequelize from "./db.js";

dotenv.config();

const PORT = process.env.PORT || 5500;

// creating an instance of express for the server
const app = express();

// middlewares
app.use(express.json());
app.use("/api", userRoutes);

// Sync the database and start the server
sequelize
  .sync()
  .then(() => {
    console.log("Database connected and synced!");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
