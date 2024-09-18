import { Job } from "@/app/types/type";
import { FC } from "react";

interface JobNavProps {
  jobData: Job[];
  selectedJobId: string | undefined;
  onSelectJob: (job: Job) => void;
}

const JobNav: FC<JobNavProps> = ({ jobData, selectedJobId, onSelectJob }) => {
  return (
    <nav className="flex-none w-full md:w-1/4 border-r border-gray-300 dark:border-gray-700 mb-6 md:mb-0 overflow-y-auto scrollbar-hide">
      <h2 className="text-xl font-bold mb-4">Job Experiences</h2>
      <ul className="space-y-2">
        {jobData.map((job) => (
          <li
            key={job.id}
            onClick={() => onSelectJob(job)}
            className={`cursor-pointer p-3 transition-all duration-300 rounded-lg 
              ${
                selectedJobId === job.id
                  ? "bg-blue-200 dark:bg-blue-800 shadow-lg"
                  : "hover:bg-blue-100 dark:hover:bg-blue-700"
              }`}
          >
            {job.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default JobNav;
