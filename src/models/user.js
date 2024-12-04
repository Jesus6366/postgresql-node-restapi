import { DataTypes } from "sequelize";
import sequelize from "../db.js";

// define user model

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["Admin", "User"]],
      },
    },
  },
  {
    tableName: "users", // define table name as lowercasw
  }
);

export default User; // export the user model
