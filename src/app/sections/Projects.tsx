import { FC } from "react";
import SectionContainer from "@/components/SectionContainer";
import Card from "@/components/Card";
import { projectData } from "../data/data";

const Projects: FC = () => {
  return (
    <SectionContainer>
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-left text-3xl font-extrabold text-accent-light dark:text-white">
          Projects
        </h2>
      </div>
      <div className="flex flex-col max-w-4xl mx-auto space-y-8">
        {projectData.map((project) => (
          <Card key={project.id} card={project} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
