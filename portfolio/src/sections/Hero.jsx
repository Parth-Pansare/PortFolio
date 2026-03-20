import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "2rem" }}>
      <div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p style={{ color: "var(--primary-color)", fontWeight: "600", marginBottom: "1rem" }}>Welcome to my portfolio</p>
          <h1 style={{ fontSize: "3.5rem", lineHeight: "1.2", marginBottom: "1.5rem" }}>
            Hi, I'm <span style={{ color: "var(--primary-color)" }}>Parth</span><br />
            Java Backend Developer
          </h1>
          <p style={{ fontSize: "1.25rem", color: "white", fontWeight: "500", marginBottom: "1rem" }}>
            Specializing in Spring Boot and scalable API design.
          </p>
          <p style={{ fontSize: "1.1rem", color: "var(--secondary-text)", marginBottom: "2.5rem", maxWidth: "600px" }}>
            I build backend systems, REST APIs, and Android apps using modern development practices.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div style={{
          width: "400px",
          height: "400px",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          background: "linear-gradient(45deg, var(--primary-color), var(--accent-color))",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(99, 102, 241, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
           <img 
            src={profileImg} 
            alt="Parth Pansare" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }} 
           />
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 968px) {
          .hero { grid-template-columns: 1fr !important; text-align: center; }
          .hero > div { display: flex; flex-direction: column; align-items: center; }
          h1 { fontSize: 2.5rem !important; }
          div[style*="width: 400px"] { width: 300px !important; height: 300px !important; }
        }
      `}</style>
    </section>
  );
}
