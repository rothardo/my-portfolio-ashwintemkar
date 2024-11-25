import { FC, ReactNode } from "react";

interface ThemeWrapperProps {
    children: ReactNode;
    className?: string;
}

const ThemeWrapper: FC<ThemeWrapperProps> = ({ children, className = "" }) => {
    return (
        <div
            className={`bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark ${className}`}
        >
            {children}
        </div>
    );
};

export default ThemeWrapper;
