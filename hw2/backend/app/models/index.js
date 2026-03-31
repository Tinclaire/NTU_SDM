import dbConfig from "../config/db.config.js";
import Sequelize from "sequelize";
import Enrollment from "./enrollment.js";
import { initializeAssociations } from "./associations.js";
import Course from "./course.js";
 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool,
    port: dbConfig.PORT,
});
 
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// init models
db.Enrollment = Enrollment(sequelize, Sequelize);
db.Course = Course(sequelize, Sequelize);

initializeAssociations(db)
 
export default db;