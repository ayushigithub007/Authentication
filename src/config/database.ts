import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "trading_db",
  "postgres",
  "password",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

export default sequelize;
