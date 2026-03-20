import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Ecommerce Web Application",
      description: "Full-stack ecommerce platform with authentication, cart system, and payment integration.",
      tech: ["Django", "MySQL", "Bootstrap"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management API",
      description: "A robust RESTful API for task scheduling and team collaboration with JWT auth.",
      tech: ["Spring Boot", "PostgreSQL", "Docker"],
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio designed with minimalist UI and interactive animations.",
      tech: ["React", "Framer Motion", "Vite"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects">
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>My <span style={{ color: "var(--primary-color)" }}>Work</span></h2>
        <p style={{ color: "var(--secondary-text)", maxWidth: "600px", margin: "0 auto" }}>
          A showcase of my recent projects, featuring full-stack development and modern design principles.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2.5rem" }}>
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            style={{
              background: "var(--card-bg)",
              borderRadius: "1rem",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.05)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
            }}
          >
            <div style={{ height: "200px", background: "linear-gradient(135deg, #334155, #0f172a)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "3rem", opacity: 0.2 }}>[Image]</span>
            </div>
            
            <div style={{ padding: "2rem" }}>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "0.8rem" }}>{project.title}</h3>
              <p style={{ color: "var(--secondary-text)", marginBottom: "1.5rem", fontSize: "0.95rem" }}>{project.description}</p>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
                {project.tech.map(t => (
                  <span key={t} style={{ fontSize: "0.8rem", color: "var(--accent-color)" }}>#{t}</span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <a href={project.github} className="btn btn-outline" style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "8px 16px", fontSize: "0.9rem" }}>
                  <Github size={18} /> Code
                </a>
                <a href={project.demo} className="btn btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "8px 16px", fontSize: "0.9rem" }}>
                  <ExternalLink size={18} /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
