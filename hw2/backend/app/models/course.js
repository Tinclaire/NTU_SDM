export default (sequelize, Sequelize) => {

    const Course = sequelize.define("course", {
        name: {
            type: Sequelize.STRING(20),
        }
    });

    return Course;
}