import { ReactNode, useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import "./globals.css";

const PageLayout = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>{loading ? <Loader /> : children}</div>
    </>
  );
};

export default PageLayout;
