import { FC } from "react";

interface EmailProps {
  emailAddress: string;
}

const Email: FC<EmailProps> = ({ emailAddress }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      {" "}
      {/* Added margin bottom */}
      <div className="transform rotate-90 origin-bottom-left">
        <a
          href={`mailto:${emailAddress}`}
          className="text-sm font-mono text-gray-800 dark:text-gray-200 hover:translate-y-[-3px] transition-transform"
          aria-label={`Email: ${emailAddress}`}
        >
          {emailAddress}
        </a>
      </div>
      <div className="w-px h-32 bg-light-slate mt-1"></div>{" "}
      {/* Vertical line */}
    </div>
  );
};

export default Email;
