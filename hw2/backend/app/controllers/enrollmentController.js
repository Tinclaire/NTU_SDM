import db from "../models/index.js";

const Op = db.Sequelize.Op;
const Enrollment = db.Enrollment;
const Course = db.Course

export const findByStudent = async (req, res) => {
    try {
        const keyword = req.params.keyword

        const data = await Enrollment.findAll({
            where: {
                [Op.or]: [
                    { studentId: keyword },
                    { name: keyword },
                ],
            },
            attributes: ['studentId', 'name', 'semester']
        })

        res.send(data)
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while retrieving enrollments.", })
    }
}

export const findDetail = async (req, res) => {
    try {
        const studentId = req.params.id
        const semester = req.params.semester

        const data = await Enrollment.findOne({
            where: {
                studentId: studentId,
                semester: semester,
            },
            include: Course
        })

        res.send(data)
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving details.",
        })
    }
}