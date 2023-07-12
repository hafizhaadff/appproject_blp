import { Sequelize } from "sequelize";

const db = new Sequelize('appproject_blp', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;