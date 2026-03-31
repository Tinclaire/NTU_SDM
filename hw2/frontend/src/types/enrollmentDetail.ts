import type { Course } from "./course";

export interface EnrollmentDetail {
  studentId: string;
  name: string;
  semester: string;
  courses: Course[];
}