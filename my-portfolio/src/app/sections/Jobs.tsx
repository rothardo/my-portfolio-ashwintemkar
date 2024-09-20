import { FC, useState } from "react";
import { Job } from "../types/type";
import { jobData } from "../data/data";
import JobNav from "@/components/JobNav";
import DescriptionPanel from "@/components/DescriptionPanel";

const Jobs: FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(jobData[0]);

  return (
    <section className="flex flex-col md:flex-row max-w-6xl mx-auto p-8 bg-light-gray dark:bg-dark-gray text-text-light dark:text-text-dark min-h-screen">
      <JobNav
        jobData={jobData}
        selectedJobId={selectedJob?.id}
        onSelectJob={setSelectedJob}
      />
      <DescriptionPanel job={selectedJob} />
    </section>
  );
};

export default Jobs;
