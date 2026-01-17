import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "trading_db",
  "postgres",
  "password",
  {
    host: "localhost",
    dialect: "postgres",
    logging: false
  }
);

export default sequelize;
