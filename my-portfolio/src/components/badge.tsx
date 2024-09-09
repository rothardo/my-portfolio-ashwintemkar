import React, { FC } from "react";

interface BadgeProps {
  text: string;
}

const Badge: FC<BadgeProps> = ({ text }) => {
  return (
    <span
      style={{
        display: "inline-block",
        backgroundColor: "#e0e0e0",
        color: "#333",
        borderRadius: "12px",
        padding: "5px 10px",
        margin: "2px",
        fontSize: "14px",
      }}
    >
      {text}
    </span>
  );
};

export default Badge;
