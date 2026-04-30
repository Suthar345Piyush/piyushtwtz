// main page of the app

import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import Quote from "@/components/Quote";
import GithubActivityMap from "@/components/GithubActivityMap";
import ResumeLink from "@/components/ResumeLink";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#0a0a0a] transition-colors duration-300 min-h-screen">

      {/* Fixed theme toggle button */}
      <div className="fixed top-5 right-5 z-50">
        <ThemeSwitch />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <Hero />
        <About />
        <Quote />
        <WorkExperience />
        <Projects />
        <GithubActivityMap />
        <Education />
        <Subscribe />
        <Skills />
        <ResumeLink />
        <Footer />
      </div>
    </main>
  );
}