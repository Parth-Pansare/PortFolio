import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

export default function About() {
  return (
    <section id="about" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", alignItems: "center", gap: "4rem" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div style={{
          position: "relative",
          width: "100%",
          maxWidth: "400px",
          aspectRatio: "1/1",
          borderRadius: "2rem",
          background: "var(--card-bg)",
          overflow: "hidden",
          border: "2px solid var(--primary-color)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
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

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>About <span style={{ color: "var(--primary-color)" }}>Me</span></h2>
        <p style={{ fontSize: "1.1rem", color: "var(--secondary-text)", marginBottom: "1.5rem", lineHeight: "1.8" }}>
          Hello! I'm <span style={{ color: "white", fontWeight: "600" }}>Mr. Parth Santosh Pansare</span>, a dedicated Software Developer with a strong focus on building robust backend systems and modern mobile experiences.
        </p>
        <p style={{ fontSize: "1.1rem", color: "var(--secondary-text)", marginBottom: "2rem", lineHeight: "1.8" }}>
          My expertise lies in the <span style={{ color: "var(--accent-color)" }}>Java ecosystem</span>, specifically crafting high-performance REST APIs with <span style={{ color: "var(--accent-color)" }}>Spring Boot</span> and implementing secure <span style={{ color: "var(--accent-color)" }}>JWT-based authentication</span>. On the mobile front, I love building intuitive and responsive user interfaces using <span style={{ color: "var(--accent-color)" }}>Jetpack Compose</span> for Android.
        </p>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
          {[
            { label: "Name", value: "Parth Pansare" },
            { label: "Role", value: "Backend & Android Dev" },
            { label: "Education", value: "Parul University" },
            { label: "Location", value: "Vadodara, India" }
          ].map((item) => (
            <div key={item.label} style={{ background: "rgba(255,255,255,0.03)", padding: "1rem", borderRadius: "0.8rem", borderLeft: "3px solid var(--primary-color)" }}>
              <p style={{ fontWeight: "600", color: "var(--primary-color)", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px" }}>{item.label}</p>
              <p style={{ color: "var(--text-color)", marginTop: "0.3rem" }}>{item.value}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 968px) {
          #about { grid-template-columns: 1fr !important; gap: 3rem !important; text-align: center; }
          #about > div { display: flex; flex-direction: column; align-items: center; }
          div[style*="grid-template-columns: repeat"] { text-align: left; }
        }
      `}</style>
    </section>
  );
}
