import { FC } from "react";

const Social: FC = () => {
  return (
    <div className="flex flex-col items-center relative">
      <ul className="m-0 p-0 list-none">
        <li>
          <a
            href="https://twitter.com/yourusername"
            className="py-2 px-4 flex items-center hover:translate-y-[-3px] transition-transform"
          >
            asdfsdf
          </a>
        </li>
        {/* Add more social links as needed */}
        <li>
          <a
            href="https://linkedin.com/in/yourusername"
            className="py-2 px-4 flex items-center hover:translate-y-[-3px] transition-transform"
          >
            asdfasdfsdaf
          </a>
        </li>
      </ul>
      <div className="absolute w-px h-24 bg-light-slate"></div>
    </div>
  );
};

export default Social;
