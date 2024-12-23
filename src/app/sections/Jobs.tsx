import { FC, useState } from "react";
import { Job } from "../types/type";
import { jobData } from "../data/data";
import JobNav from "@/components/JobNav";
import DescriptionPanel from "@/components/DescriptionPanel";
import SectionContainer from "@/components/SectionContainer";

const Jobs: FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(jobData[0]);

  return (
    <SectionContainer>
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-left text-3xl font-extrabold text-accent-light dark:text-white">
          Job Experiences
        </h2>
      </div>

      <div className="flex flex-col md:flex-row max-w-4xl mx-auto text-left">
        <JobNav
          jobData={jobData}
          selectedJobId={selectedJob?.id}
          onSelectJob={setSelectedJob}
        />
        <div className="flex-1 overflow-x-auto">
          <DescriptionPanel job={selectedJob} />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Jobs;
