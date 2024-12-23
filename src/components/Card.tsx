import { FC } from "react";
import { Project } from "@/app/types/type";
import Image from "next/image";

interface CardProps {
  card: Project;
}

const Card: FC<CardProps> = ({ card }) => {
  return (
    <div className="relative flex flex-col md:flex-row items-start rounded-lg shadow-lg p-6 mb-8 opacity-0 animate-fade-in">
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <div className="relative group">
          <Image
            src={card.image}
            alt={card.name}
            width={400}
            height={300}
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <span className="text-white text-center">{card.hoverText}</span>
          </div>
        </div>
      </div>
      <div className="flex-1 md:ml-6">
        <h3 className="text-xl font-bold text-white-900 dark:text-white">
          {card.name}
        </h3>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {card.description}
        </p>
        <div className="mt-4">
          <p className="text-sm font-semibold text-gray-500">Tech Stack:</p>
          <ul className="flex flex-wrap mt-1 gap-2">
            {card.techStack.map((tech) => (
              <li
                key={tech}
                className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded text-sm text-gray-700 dark:text-gray-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex space-x-4">
          <a
            href={card.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-900 dark:text-blue-400"
          >
            GitHub
          </a>
          {card.liveDemoUrl && (
            <a
              href={card.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
