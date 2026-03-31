export const seedDatabase = async (db) => {
    const { Enrollment, Course } = db

    const count = await Enrollment.count();
    if (count > 0) return;

    // create student erollments
    const steve2024s = await Enrollment.create({
        studentId: "0001",
        name: "Steve",
        semester: "2024s"
    });

    const steve2024f = await Enrollment.create({
        studentId: "0001",
        name: "Steve",
        semester: "2024f"
    });

    const steve2025s = await Enrollment.create({
        studentId: "0001",
        name: "Steve",
        semester: "2025s"
    });

    const steve2025f = await Enrollment.create({
        studentId: "0001",
        name: "Steve",
        semester: "2025f"
    });

    // create courses
    const course1 = await Course.create({ name: "Text Mining" });
    const course2 = await Course.create({ name: "Intro. to ML" });

    // create associations
    await steve2025s.addCourses([course1, course2]);
    
    console.log("Initial data seeded successfully.");
}