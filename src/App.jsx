import { useEffect } from "react";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  useEffect(() => {
    // Scroll Reveal (optimized)
    const sections = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target); // performance boost 🔥
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    // Cursor Glow (disable on touch devices)
    const isTouch = window.matchMedia("(hover: none)").matches;
    const cursor = document.querySelector(".cursor-glow");

    const move = (e) => {
      if (!cursor || isTouch) return;
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    if (!isTouch) {
      window.addEventListener("mousemove", move);
    }

    return () => {
      if (!isTouch) {
        window.removeEventListener("mousemove", move);
      }
      sections.forEach((s) => observer.unobserve(s));
    };
  }, []);

  return (
    <>
      {/* Cursor Glow */}
      <div className="cursor-glow" aria-hidden="true" />

      {/* Skip link for accessibility */}
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      {/* Main Content */}
      <main id="main">
        <Hero />
        <Timeline />
        <Gallery />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 AstroHack UI</p>
      </footer>
    </>
  );
}

export default App;