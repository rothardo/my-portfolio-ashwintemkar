import { FC } from "react";
import Head from "next/head";

interface HeadProps {
  title: string;
}

const PageHead: FC<HeadProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="My portfolio website" />
    </Head>
  );
};

export default PageHead;
