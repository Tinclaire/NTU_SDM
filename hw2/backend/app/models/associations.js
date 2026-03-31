export function initializeAssociations(db) {
    const { Enrollment, Course } = db

    // one to many
    // Enrollment.hasMany(Course)
    // Course.belongsTo(Enrollment)

    // many to many
    Enrollment.belongsToMany(Course, { through: 'enrollment_courses', onDelete: 'CASCADE' });
    Course.belongsToMany(Enrollment, { through: 'enrollment_courses', onDelete: 'CASCADE' });
}