import SectionContainer from "@/components/SectionContainer";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-start max-w-6xl mx-auto text-left">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-highlight-white font-code">
          Hi, I am
        </h3>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-accent-light dark:text-white font-sans">
          Ashwin Temkar
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6 max-w-xl font-code text-accent-light dark:text-accent-light">
          I design and build digital solutions that create impact and drive
          results.
        </p>
        <p className="text-base sm:text-lg md:text-xl font-code text-accent-dark dark:text-accent-light">
          Currently crafting innovative solutions at{" "}
          <a
            href="https://pamgro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-highlight-white cursor-pointer"
          >
            Pamgro
          </a>{" "}
          and{" "}
          <a
            href="https://wisestep.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-highlight-white cursor-pointer"
          >
            Wisestep
          </a>
          .
        </p>
      </div>
    </SectionContainer>
  );
};

export default Hero;
