// main page of the app 

import Hero from "@/components/Hero";
import About from "@/components/About";
import  WorkExperience  from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";


export default function Home() {

    return (

        <main className="min-h-screen bg-background">

          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">

            <Hero />
            <About />
            <WorkExperience />
            <Projects />
            <Education />
            <Subscribe />
            <Skills />
            <Footer />

          </div>
        </main>
    )
}