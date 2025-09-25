import { useEffect, useMemo, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";

export default function App() {
  const sectionIds = useMemo(
    () => ["home", "about", "skills", "experience", "projects", "contact"],
    []
  );
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Highlight the navigation item that corresponds to the section most in view.
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const id = visible.target.id;
          setActiveSection(current => (current === id ? current : id));
        }
      },
      { threshold: [0.3, 0.6, 0.9], rootMargin: "-30% 0px -40% 0px" }
    );

    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
      observer.disconnect();
    };
  }, [sectionIds]);

  return (
    <div className="text-gray-900">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t mt-10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Po Tsun Yu
      </footer>
    </div>
  );
}
