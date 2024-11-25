import { FC } from "react";
import Image from "next/image";
import { social } from "@/app/data/data";

const Social: FC = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      <ul className="m-0 p-0 list-none space-y-4">
        {social.map((icon, index) => (
          <li
            key={index}
            className="transform transition-transform duration-300 hover:-translate-y-2"
          >
            <a
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                className="transition-colors duration-300 group-hover:filter 
                group-hover:brightness-0 group-hover:invert group-hover:sepia
                pnpm  group-hover:brightness-150 group-hover:hue-rotate-[90deg]"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
