import { FC, ReactNode } from "react";

interface SideProps {
  children: ReactNode;
}

const Side: FC<SideProps> = ({ children }) => {
  return (
    <aside className="flex items-center justify-center h-screen w-1/10 p-4 bg-gray-50 dark:bg-gray-800">
      {children}
    </aside>
  );
};

export default Side;
