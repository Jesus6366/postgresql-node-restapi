import express from "express";
import userRoutes from "./routes/users.routes.js";
import { configDotenv } from "dotenv";
import { Sequelize } from "sequelize";

configDotenv();

const app = express();

// middlewares
app.use("/api", userRoutes);

app.listen(5000, () => console.log(`server running on port 5000`));
