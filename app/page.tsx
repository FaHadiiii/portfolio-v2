import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { DashedDivider } from "@/components/ui/dashed-divider";

export default function Home() {
  return (
    <>
      {/* Left line */}
      <div
        className="fixed top-0 bottom-0 w-px bg-[var(--border)] pointer-events-none z-[60]"
        style={{ left: "max(.8rem, calc(50% - 24rem + 1rem))" }}
      />
      {/* Right line */}
      <div
        className="fixed top-0 bottom-0 w-px bg-[var(--border)] pointer-events-none z-[60]"
        style={{ left: "min(calc(100% - .8rem), calc(50% + 24rem - 1rem))" }}
      />

      <Navbar />

      <main className="max-w-3xl mx-auto px-3.5 sm:px-6 lg:pl-4 lg:pr-4  pb-16">
        <div className="flex flex-col gap-3">
          <ProfileCard />
          <div className="flex flex-col">
            <SocialLinks />
            <DashedDivider />
            <Skills />
            <About />
            <Testimonials />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
