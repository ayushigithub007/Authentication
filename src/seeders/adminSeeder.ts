import { User } from "../models/user.model";

export const adminSeeder = async (): Promise<void> => {
  const adminExists = await User.findOne({
    where: { role: "admin" }
  });

  if (!adminExists) {
    await User.create({
      name: "Admin",
      email: "admin@trading.com",
      password: "admin123",
      role: "admin"
    });

    console.log("✅ Admin created successfully");
  } else {
    console.log("ℹ️ Admin already exists");
  }
};
