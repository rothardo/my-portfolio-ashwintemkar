import { FC } from "react";

interface EmailProps {
  emailAddress: string;
}

const Email: FC<EmailProps> = ({ emailAddress }) => {
  return <a href={`mailto:${emailAddress}`}>{emailAddress}</a>;
};

export default Email;
