import { useState } from "react";
import type { Enrollment } from "../types/enrollment";
import { SearchBox } from "../components/SearchBox";
import { EnrollmentList } from "../components/EnrollmentList";
import axios from "axios";

export function Home() {
  const [display, setDisplay] = useState<Enrollment[]>([]);

  const API_URL = "http://localhost:8080";

  function onSubmit(keyword: string) {
    axios.get(`${API_URL}/api/enrollments/${keyword}`).then((res) => {
      setDisplay(res.data);
    });
  }

  return (
    <main className="h-full py-5">
      <div className="items-center w-full">
        <SearchBox onSubmit={onSubmit} />
        <EnrollmentList display={display} />
      </div>
    </main>
  );
}
