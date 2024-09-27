import { FC } from "react";

const Social: FC = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      {" "}
      {/* Added margin bottom */}
      <ul className="m-0 p-0 list-none">
        <li className="mb-2">
          <a
            href="https://twitter.com/yourusername"
            className="transform rotate-90 origin-bottom-left text-sm font-mono text-gray-800 dark:text-gray-200 hover:translate-y-[-3px] transition-transform"
            aria-label="Twitter"
          >
            Twitter
          </a>
        </li>
        <li className="mb-2">
          <a
            href="https://linkedin.com/in/yourusername"
            className="transform rotate-90 origin-bottom-left text-sm font-mono text-gray-800 dark:text-gray-200 hover:translate-y-[-3px] transition-transform"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <div className="w-px h-32 bg-light-slate mt-1"></div>{" "}
      {/* Vertical line */}
    </div>
  );
};

export default Social;
