import { FC } from "react";
import ashwin from "@/images/ashwin.jpeg";
import Image from "next/image";
import SectionContainer from "@/components/SectionContainer";
import { technologies } from "../data/data";

const About: FC = () => {
  return (
    <SectionContainer>
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-left text-3xl font-extrabold text-accent-light dark:text-white">
          About Me
        </h2>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-start justify-between max-w-4xl mx-auto mb-6">
        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-6 md:mb-0 md:mr-8 flex-none group hover:transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out">
          <div className="absolute inset-0 bg-blue-900 bg-opacity-80 group-hover:bg-opacity-0 transition-opacity duration-300 rounded-lg">
            <Image
              src={ashwin}
              alt="Ashwin Temkar"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <Image
              src={ashwin}
              alt="Ashwin Temkar"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex-1 text-left">
          <p className="text-base sm:text-lg md:text-xl mb-6 text-accent-light dark:text-accent-light">
            I'm Ashwin Temkar, a problem-solver and tech enthusiast. I completed
            my Computer Science and Engineering degree last year, and I've been
            building innovative solutions ever since.
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-accent-light dark:text-accent-light">
            My journey started with a dynamic startup, where I gained invaluable
            experience through both internships and full-time roles. I’ve worked
            across teams, contributing to innovative projects and turning ideas
            into solutions.
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-accent-light dark:text-accent-light">
            With a passion for continuous growth, my skills speak louder than
            words. While experience is a journey, I've already turned many rocks
            and delivered tangible results. My open-source contributions are
            just a glimpse of what's coming next.
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-highlight-white dark:text-highlight-white">
            There's more to come as I continue my journey—stay tuned!
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-accent-light dark:text-accent-light">
            Here are a few technologies I’ve been working with recently:
          </p>
        </div>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pl-5 justify-center mx-auto custom-bullets">
        {technologies.map((tech, index) => (
          <li
            key={index}
            className="text-sm sm:text-base md:text-lg text-accent-light dark:text-accent-light bg-gray-200 dark:bg-dark-gray rounded px-2 py-1"
          >
            {tech}
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export default About;
