import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user.model";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "trading_user",       // change if needed
  password: "password123", // change if needed
  database: "trading_db",

  models: [User], // ✅ EXPLICIT MODEL REGISTRATION
  logging: false
});
