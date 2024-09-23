import { Job } from "@/app/types/type";
import { FC } from "react";

interface JobNavProps {
  jobData: Job[];
  selectedJobId: string | undefined;
  onSelectJob: (job: Job) => void;
}

const JobNav: FC<JobNavProps> = ({ jobData, selectedJobId, onSelectJob }) => {
  return (
    <nav className="flex-none w-full md:w-1/4 mb-6 md:mb-0">
      <ul className="flex overflow-x-auto space-x-2 md:block scrollbar-hide">
        {jobData.map((job) => (
          <li
            key={job.id}
            onClick={() => onSelectJob(job)}
            className={`flex-none cursor-pointer p-4 transition-all duration-300 rounded-lg border 
              ${
                selectedJobId === job.id
                  ? "bg-green-100 dark:bg-green-800 shadow-lg border-green-300 dark:border-green-600"
                  : "bg-white dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-700 border-gray-300 dark:border-gray-700"
              }`}
          >
            <span
              className={`text-sm ${
                selectedJobId === job.id
                  ? "text-white"
                  : "text-gray-500 dark:text-gray-200"
              }`}
            >
              {job.title}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default JobNav;
