import express from "express";
import { sequelize } from "./config/database";
import { adminSeeder } from "./seeders/adminSeeder";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Trading API is running 🚀");
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // auto create tables

    console.log("✅ Database connected");

    await adminSeeder(); // 🔥 auto admin creation

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server failed:", error);
  }
};

startServer();
