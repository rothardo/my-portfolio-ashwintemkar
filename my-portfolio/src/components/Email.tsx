import { FC } from "react";

interface EmailProps {
  emailAddress: string;
}

const Email: FC<EmailProps> = ({ emailAddress }) => {
  return (
    <div className="flex flex-col items-end mb-8">
      <ul className="m-0 p-0 list-none">
        <li className="transform rotate-90">
          <a
            href={`mailto:${emailAddress}`}
            className="transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:brightness-150 group-hover:hue-rotate-[90deg]"
            aria-label={`Email: ${emailAddress}`}
          >
            {emailAddress}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Email;
