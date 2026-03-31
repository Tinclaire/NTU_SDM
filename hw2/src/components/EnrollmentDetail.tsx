import type { EnrollmentDetail } from "../types/enrollmentDetail";

interface EnrollmentDetailProps {
  detail: EnrollmentDetail;
}

export function EnrollmentDetail({ detail }: EnrollmentDetailProps) {
  return (
    <>
      <div className="mt-32 flex justify-center">
        <div className="w-full max-w-2xl">
          <h2 className="text-xl font-bold text-center mb-4">Enrollments</h2>
          <div className="overflow-hidden rounded-xl shadow border">
            <table className="text-center w-full">
              <tbody>
                <tr>
                  <td className="p-3">Semester</td>
                  <td className="p-3">{detail.semester}</td>
                </tr>
                <tr>
                  <td className="p-3 border-t">ID/name</td>
                  <td className="p-3 border-t">
                    {detail.id}/{detail.name}
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-t">Courses</td>
                  <td className="p-3 border-t">
                    {detail.courses.map((course) => (
                      <p key={course}>{course}</p>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
