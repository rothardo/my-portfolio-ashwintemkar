import { FC, ReactNode } from "react";

interface SideProps {
  children: ReactNode;
  orientation: "left" | "right";
}

const Side: FC<SideProps> = ({ children, orientation }) => {
  return (
    <div
      className={`fixed ${orientation === "left" ? "left-0" : "right-0"} 
                  bottom-0 w-1/10 bg-gray-50 dark:bg-gray-800 
                  flex flex-col items-center mb-8`}
    >
      {children}
    </div>
  );
};

export default Side;
