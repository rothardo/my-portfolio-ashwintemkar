import { FC, useState } from "react";
import { Job } from "../types/type";
import { jobData } from "../data/data";
import Badge from "@/components/badge";

const Jobs: FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(jobData[0]);

  return (
    <section className="flex flex-col md:flex-row max-w-6xl mx-auto p-8 bg-light-gray dark:bg-dark-gray text-text-light dark:text-text-dark min-h-screen">
      <nav className="flex-none w-full md:w-1/4 border-r border-gray-300 dark:border-gray-700 mb-6 md:mb-0">
        <h2 className="text-xl font-bold mb-4">Job Experiences</h2>
        <ul>
          {jobData.map((job) => (
            <li
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className="cursor-pointer p-2 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
            >
              {job.title}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-1 p-4">
        {selectedJob ? (
          <>
            <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
            <h3 className="text-xl font-semibold mb-1">{selectedJob.role}</h3>
            <h4 className="text-md mb-2">{selectedJob.timeline}</h4>
            <div className="flex flex-wrap mb-4">
              {selectedJob.stack.map((tech) => (
                <Badge key={tech} text={tech} />
              ))}
            </div>
            <ul className="list-disc pl-5">
              {selectedJob.description.map((desc, index) => (
                <li key={index} className="mb-2">
                  {desc}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>Select a job to see details.</p>
        )}
      </div>
    </section>
  );
};

export default Jobs;
