import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// set up the sequilize intance with the database

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  dialect: "postgres",
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

export default sequelize; // export instance to use in other files
