import { findByStudent, findDetail } from "../controllers/enrollmentController.js";
import express from "express";
 
export default (app) => {
    let router = express.Router();
 
    // Retrieve all Enrollments by student(name or id)
    router.get("/:keyword", findByStudent)
 
    // Retrieve a enrollment detail with student id & semester
    router.get("/detail/:id/:semester", findDetail);
 
    app.use("/api/enrollments", router);
};