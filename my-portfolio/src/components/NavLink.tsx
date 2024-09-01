import Link from "next/link";
import { FC } from "react";

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ href, className = "", children }) => {
  return (
    <Link
      href={href}
      className={`text-primary dark:text-secondary hover:text-customBlue dark:hover:text-customRed px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
