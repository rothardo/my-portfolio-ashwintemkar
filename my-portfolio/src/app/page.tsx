"use client";
import PageLayout from "@/app/PageLayout";
import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";
import Featured from "@/app/sections/Featured";
import Hero from "@/app/sections/Hero";
import Jobs from "@/app/sections/Jobs";
import Projects from "./sections/Projects";
import ThemeWrapper from "@/components/ThemeWrapper";
import Side from "@/components/Side";
import Social from "@/components/Social";
import Email from "@/components/Email";
import Nav from "@/components/Nav";

const Page = () => {
  return (
    <div className="flex h-screen">
      <Side>
        <Social />
      </Side>
      <div className="flex-1 overflow-y-auto h-full">
        <PageLayout>
          <ThemeWrapper>
            <Nav />
            <Hero />
            <About />
            <Jobs />
            <Projects />
            <Featured />
            <Contact />
          </ThemeWrapper>
        </PageLayout>
      </div>
      <Side>
        <Email emailAddress="ashwintemkar@gmail.com" />
      </Side>
    </div>
  );
};

export default Page;
