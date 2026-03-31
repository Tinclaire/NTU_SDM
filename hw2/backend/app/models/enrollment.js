export default (sequelize, Sequelize) => {

    const Enrollment = sequelize.define("enrollment", {
        studentId: {
            type: Sequelize.STRING(20),
        },
        name: {
            type: Sequelize.STRING(20),
        },
        semester: {
            type: Sequelize.STRING(20),
        },
    });
    
    return Enrollment;
};