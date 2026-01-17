import app from "./app";
import sequelize from "./config/database";
import { adminSeeder } from "./seeders/admin.seeder";
import "./models/user.model";

const PORT = 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected");

    await sequelize.sync();
    await adminSeeder();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server error:", error);
  }
};

startServer();
