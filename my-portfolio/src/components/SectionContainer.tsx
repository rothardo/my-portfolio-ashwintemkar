import { FC, ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
}

const SectionContainer: FC<SectionContainerProps> = ({ children }) => {
  return (
    <section className="flex flex-col justify-center items-start min-h-screen bg-light-gray dark:bg-dark-gray text-text-light dark:text-text-dark p-8">
      {children}
    </section>
  );
};

export default SectionContainer;
