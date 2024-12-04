import express from "express";
import userRoutes from "./routes/users.routes.js";

const app = express();

// middlewares
app.use("/api", userRoutes);

app.listen(5000, () => console.log(`server running on port 5000`));
