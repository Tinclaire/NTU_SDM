import { useParams } from "react-router-dom";
import { EnrollmentDetailList } from "../components/EnrollmentDetailList";
// import { dummyDetails } from "../data/details";
import { useEffect, useState } from "react";
import axios from "axios";
import type { EnrollmentDetail } from "../types/enrollmentDetail";

export function DetailPage() {
  const { id, semester } = useParams();
  const API_URL = "http://localhost:8080";

  const [detail, setDetail] = useState<EnrollmentDetail>();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/enrollments/detail/${id}/${semester}`)
      .then((res) => {
        setDetail(res.data);
      });
  }, [id, semester]);

  return (
    <>
      {detail ? (
        <EnrollmentDetailList detail={detail} />
      ) : (
        <div className="text-center font-bold">Loading...</div>
      )}
    </>
  );
}
