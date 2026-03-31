export default {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "secure1234",
    DB: "enrollments",
    dialect: "postgres",
    PORT: 5432,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};