import { FC, useState } from "react";
import { Job } from "../types/type";
import { jobData } from "../data/data";
import Badge from "@/components/badge";

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
      <div style={{ padding: "20px", flex: 1 }}>
        {selectedJob ? (
          <>
            <h2>{selectedJob.title}</h2>
            <h3>{selectedJob.role}</h3>
            <h4>{selectedJob.timeline}</h4>
            <div>
              {selectedJob.stack.map((tech) => (
                <Badge key={tech} text={tech} />
              ))}
            </div>
            <ul>
              {selectedJob.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>Select a job to see details.</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;
