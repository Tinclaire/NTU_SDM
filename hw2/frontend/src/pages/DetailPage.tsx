import { useParams } from "react-router-dom";
import { EnrollmentDetail } from "../components/EnrollmentDetail";
import { dummyDetails } from "../data/details";

export function DetailPage() {
  const { id, semester } = useParams();

  const detail = dummyDetails.filter(d => d.id === id && d.semester === semester)
  return <EnrollmentDetail detail={detail[0]} />;
}
