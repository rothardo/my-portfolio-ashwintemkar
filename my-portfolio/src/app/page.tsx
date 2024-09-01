"use client";
import PageLayout from "@/app/PageLayout";
import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";
import Featured from "@/app/sections/Featured";
import Hero from "@/app/sections/Hero";
import Jobs from "@/app/sections/Jobs";
import Projects from "./sections/Projects";
import ThemeWrapper from "@/components/ThemeWrapper";

const Page = () => {
  return (
    <PageLayout>
      <ThemeWrapper>
        <Hero />
        <About />
        <Jobs />
        <Projects />
        <Featured />
        <Contact />
      </ThemeWrapper>
    </PageLayout>
  );
};

export default Page;
