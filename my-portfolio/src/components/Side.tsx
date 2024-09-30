import { FC, ReactNode } from "react";

interface SideProps {
  children: ReactNode;
  orientation: "left" | "right";
}

const Side: FC<SideProps> = ({ children, orientation }) => {
  return (
    <div
      className={`fixed ${
        orientation === "left" ? "left-8" : "right-[calc(95vw-100%)]"
      } 
                  top-1/2 transform -translate-y-1/2 w-auto flex flex-col items-center`}
    >
      {children}
    </div>
  );
};

export default Side;
