import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer style={{
        padding: "2rem 10%",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem"
      }}>
        <p style={{ color: "var(--secondary-text)" }}>
          © 2026 <span style={{ color: "var(--primary-color)", fontWeight: "600" }}>Parth</span>. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", color: "var(--secondary-text)" }}>
          <a href="#" className="hover-primary">GitHub</a>
          <a href="#" className="hover-primary">LinkedIn</a>
          <a href="#" className="hover-primary">Twitter</a>
        </div>
      </footer>

      <style>{`
        .hover-primary:hover { color: var(--primary-color); }
        @media (max-width: 768px) {
          footer { justify-content: center; text-align: center; }
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

export default App;
