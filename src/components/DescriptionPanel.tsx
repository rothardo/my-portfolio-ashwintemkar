import { FC } from "react";
import Badge from "@/components/badge";
import { Job } from "@/app/types/type";

interface DescriptionPanelProps {
  job: Job | null;
}

const DescriptionPanel: FC<DescriptionPanelProps> = ({ job }) => {
  if (!job) {
    return <p>Select a job to see details.</p>;
  }

  return (
    <div className="p-4">
      <a href={job.link} className="text-3xl font-bold mb-2 cursor-pointer" target="_blank" rel="noopener noreferrer">
        {job.title}
      </a>
      <h3 className="text-xl font-semibold mb-1">{job.role}</h3>
      <h4 className="text-md italic mb-2">{job.timeline}</h4>
      <div className="flex flex-wrap mb-4">
        {job.stack.map((tech) => (
          <Badge key={tech} text={tech} />
        ))}
      </div>
      <ul className="list-disc pl-5">
        {job.description.map((desc, index) => (
          <li key={index} className="mb-2">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DescriptionPanel;
