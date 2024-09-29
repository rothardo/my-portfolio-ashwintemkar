import { ReactNode, useState, useEffect } from "react";
import Loader from "@/components/Loader";
import "./globals.css";

interface PageLayoutProps {
  children: ReactNode;
  loadingTime?: number;
}

const PageLayout = ({ children, loadingTime = 3000 }: PageLayoutProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), loadingTime);
    return () => clearTimeout(timer);
  }, [loadingTime]);

  return <div>{loading ? <Loader /> : <div>{children}</div>}</div>;
};

export default PageLayout;
