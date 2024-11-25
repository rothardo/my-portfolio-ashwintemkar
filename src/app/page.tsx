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
import Nav from "@/components/Nav";
import Social from "@/components/Social";
import Email from "@/components/Email";

const Page = () => {
  return (
    <div className="relative flex h-[100%]">
      <Nav />
      <Side orientation="left">
        <Social />
      </Side>
      <div className="flex flex-1">
        <ThemeWrapper className=" md:px-12 lg:px-16 flex-1">
          <PageLayout>
            <Hero />
            <About />
            <Jobs />
            <Projects />
            <Featured />
            <Contact />
          </PageLayout>
        </ThemeWrapper>
      </div>
      <Side orientation="right">
        <Email emailAddress="ashwintemkar@gmail.com" />
      </Side>
    </div>
  );
};

export default Page;
