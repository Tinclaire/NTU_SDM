import { useState } from "react";
import { dummyEnrollment } from "../data/enrollments";
import type { Enrollment } from "../types/enrollment";
import { SearchBox } from "../components/SearchBox";
import { EnrollmentList } from "../components/EnrollmentList";

export function Home() {
  const [display, setDisplay] = useState<Enrollment[]>([]);

  function onSubmit(name: string) {
    setDisplay(
      dummyEnrollment.filter((data) => data.name === name || data.id === name),
    );
  }

  return (
    <main className="h-full py-5">
      <div className="items-center w-full">
        <SearchBox onSubmit={onSubmit} />
        <EnrollmentList display={display}/>
      </div>
    </main>
  );
}