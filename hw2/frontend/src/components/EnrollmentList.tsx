import { useNavigate } from "react-router-dom";
import type { Enrollment } from "../types/enrollment";

interface EnrollmentListProps {
  display: Enrollment[];
}

export function EnrollmentList({ display }: EnrollmentListProps) {
  const navigate = useNavigate();

  function handleClick(studentId: string, semester: string) {
    navigate(`/details/${studentId}/${semester}`)
  }

  return (
    <div className="mt-6 flex justify-center">
      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-bold text-center mb-4">
          Enrollments
        </h2>

        <div className="overflow-hidden rounded-xl shadow border">
          <table className="w-full border-collapse text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 font-semibold">Semester</th>
                <th className="p-3 font-semibold">Student</th>
              </tr>
            </thead>

            <tbody>
              {display.map((enrollment) =>
                enrollment.semesters.map((s) => (
                  <tr
                    key={`${enrollment.id}-${s}`}
                    onClick={() => handleClick(enrollment.id, s)}
                    className="cursor-pointer hover:bg-blue-50 transition"
                  >
                    <td className="p-3 border-t">{s}</td>
                    <td className="p-3 border-t">
                      {enrollment.id} / {enrollment.name}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {display.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No Entry
          </p>
        )}
      </div>
    </div>
  );
}
