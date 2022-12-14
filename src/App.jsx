import { useState } from "react";
import reactLogo from "./assets/react.svg";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <div className="flex-1">
        <HeroSection />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
