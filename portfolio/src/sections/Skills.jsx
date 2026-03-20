import { motion } from "framer-motion";
import { Server, Smartphone, Database, Settings } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      icon: <Server size={32} color="var(--primary-color)" />,
      skills: ["Java", "Spring Boot", "REST APIs", "JWT Authentication"]
    },
    {
      title: "Mobile",
      icon: <Smartphone size={32} color="var(--primary-color)" />,
      skills: ["Jetpack Compose", "Android", "Kotlin"]
    },
    {
      title: "Database",
      icon: <Database size={32} color="var(--primary-color)" />,
      skills: ["MySQL"]
    },
    {
      title: "Tools",
      icon: <Settings size={32} color="var(--primary-color)" />,
      skills: ["Git", "Postman"]
    }
  ];

  return (
    <section id="skills">
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>My <span style={{ color: "var(--primary-color)" }}>Skills</span></h2>
        <p style={{ color: "var(--secondary-text)", maxWidth: "600px", margin: "0 auto" }}>
          Focused on building high-performance backend systems and intuitive mobile applications.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            style={{
              padding: "2rem",
              background: "var(--card-bg)",
              borderRadius: "1.5rem",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              border: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center"
            }}
          >
            <div style={{ marginBottom: "1.5rem" }}>{category.icon}</div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>{category.title}</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", justifyContent: "center" }}>
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: "0.5rem 1rem",
                    background: "rgba(99, 102, 241, 0.1)",
                    color: "var(--text-color)",
                    borderRadius: "50px",
                    fontSize: "0.9rem",
                    border: "1px solid rgba(99, 102, 241, 0.2)"
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
