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
      <ul className="flex overflow-x-auto md:block scrollbar-hide">
        {jobData.map((job) => (
          <li
            key={job.id}
            onClick={() => onSelectJob(job)}
            className={`flex-none cursor-pointer p-4 transition-all duration-300 relative
              ${
                selectedJobId === job.id
                  ? "bg-green-200 dark:bg-green-800 bg-opacity-75"
                  : "hover:bg-green-50 dark:hover:bg-green-800 bg-opacity-50"
              }`}
            aria-selected={selectedJobId === job.id}
            role="option"
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
            <span
              className={`absolute left-0 top-0 bottom-0 w-1 ${
                selectedJobId === job.id
                  ? "bg-green-500 dark:bg-green-300"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default JobNav;
