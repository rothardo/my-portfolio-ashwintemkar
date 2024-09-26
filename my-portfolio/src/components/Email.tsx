import { FC } from "react";

interface EmailProps {
  emailAddress: string;
}

const Email: FC<EmailProps> = ({ emailAddress }) => {
  return (
    <div className="flex flex-col items-center relative">
      <a
        href={`mailto:${emailAddress}`}
        className="py-2 px-4 text-sm font-mono text-gray-800 dark:text-gray-200 hover:translate-y-[-3px] transition-transform"
      >
        {emailAddress}
      </a>
      <div className="absolute w-px h-24 bg-light-slate"></div>
    </div>
  );
};

export default Email;
