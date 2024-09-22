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
      <div className="flex flex-col md:flex-row max-w-4xl mx-auto text-left">
        <JobNav
          jobData={jobData}
          selectedJobId={selectedJob?.id}
          onSelectJob={setSelectedJob}
        />
        <DescriptionPanel job={selectedJob} />
      </div>
    </SectionContainer>
  );
};

export default Jobs;
