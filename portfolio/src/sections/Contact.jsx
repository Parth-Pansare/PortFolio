import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact">
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Get In <span style={{ color: "var(--primary-color)" }}>Touch</span></h2>
        <p style={{ color: "var(--secondary-text)", maxWidth: "600px", margin: "0 auto" }}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "1.5rem", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Name</label>
              <input type="text" placeholder="Your Name" style={inputStyle} />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Email</label>
              <input type="email" placeholder="Email Address" style={inputStyle} />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Message</label>
              <textarea rows="5" placeholder="Your Message" style={{ ...inputStyle, resize: "none" }}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", fontSize: "1rem" }}>Send Message</button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "2rem" }}
        >
          <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Contact Details</h3>
          
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={iconContainer}><Mail size={20} color="var(--primary-color)" /></div>
            <div>
              <p style={{ fontWeight: "600" }}>Email</p>
              <p style={{ color: "var(--secondary-text)" }}>parul@example.com</p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={iconContainer}><MapPin size={20} color="var(--primary-color)" /></div>
            <div>
              <p style={{ fontWeight: "600" }}>Location</p>
              <p style={{ color: "var(--secondary-text)" }}>Vadodara, India</p>
            </div>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <p style={{ fontWeight: "600", marginBottom: "1rem" }}>Social Media</p>
            <div style={{ display: "flex", gap: "1.2rem" }}>
              <a href="#" style={socialIcon}><Github size={20} /></a>
              <a href="#" style={socialIcon}><Linkedin size={20} /></a>
              <a href="#" style={socialIcon}><Twitter size={20} /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "1rem",
  borderRadius: "0.8rem",
  background: "#0f172a",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "white",
  fontSize: "0.95rem",
  outline: "none",
  transition: "border 0.3s ease"
};

const iconContainer = {
  width: "45px",
  height: "45px",
  borderRadius: "10px",
  background: "rgba(99, 102, 241, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const socialIcon = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.05)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--secondary-text)",
  transition: "all 0.3s ease"
};
