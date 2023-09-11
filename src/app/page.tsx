import Header from "../app/components/Header";
import Hero from "../app/components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB04]/80">
      <Header />

      {/*Hero*/}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/*About*/}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/*Experience*/}
      <section id="Experience" className="snap-center">
        <Experience />
      </section>

      {/*Skills*/}
      <section id="Skills" className="snap-start">
        <Skills />
      </section>

      {/*Projects*/}
      <section
        id="Projects"
        className="snap-start
      ">
        <Projects />
      </section>

      {/*Contact Me*/}
      <section id="Contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0
              cursor-pointer"
              src="https://pbs.twimg.com/profile_images/1623643023681720321/jOvI3gBk_400x400.jpg"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
