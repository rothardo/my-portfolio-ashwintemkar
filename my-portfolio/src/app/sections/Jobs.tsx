import { FC, useState } from "react";
import { jobData } from "../data/data";
import { Job } from "../types/type";

const Jobs: FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(jobData[0]);

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ width: "200px", borderRight: "1px solid #ccc" }}>
        <h2>Job Experiences</h2>
        <ul>
          {jobData.map((job) => (
            <li
              key={job.id}
              onClick={() => setSelectedJob(job)}
              style={{ cursor: "pointer", padding: "5px" }}
            >
              {job.title}
            </li>
          ))}
        </ul>
      </nav>
      <div style={{ padding: "20px" }}>
        {selectedJob ? <></> : <p>Select a job to see details.</p>}
      </div>
    </div>
  );
};

export default Jobs;
