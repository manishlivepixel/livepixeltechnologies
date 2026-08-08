"use client";

import Navbar from "@/components/Navbar";
import styles from "./ContactPage.module.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <main>
      <Navbar />
      
      <div className={`section ${styles.pageHeader}`}>
        <div className="container">
          <h1 className={styles.title}>Contact <span className="accent-gradient">Us</span></h1>
          <p className={styles.subtitle}>Get in touch with us to discuss your next big project.</p>
        </div>
      </div>

      <div className={`section ${styles.contentSection}`}>
        <div className="container">
          <div className={styles.grid}>
            
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <h2>Our Offices</h2>
                
                <a href="https://maps.google.com/?q=Millenium+Business+Park,+Sector+3,+Mahape,+Navi+Mumbai,+Maharashtra+400710" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                  <div className={styles.infoItem}>
                    <MapPin className={styles.icon} />
                    <div>
                      <h3>Mumbai, India</h3>
                      <p>Millenium Business Park, Sector 3, Mahape,<br/>Navi Mumbai, Maharashtra 400710</p>
                    </div>
                  </div>
                </a>

                <a href="https://maps.google.com/?q=243,+Michelle+Cir,+Edison,+New+Jersey+08820+USA" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                  <div className={styles.infoItem}>
                    <MapPin className={styles.icon} />
                    <div>
                      <h3>USA</h3>
                      <p>243, Michelle Cir, Edison,<br/>New Jersey 08820 USA</p>
                    </div>
                  </div>
                </a>

                <a href="https://maps.google.com/?q=13,+Rue+Des+Petites,+Ecuries+75010,+Paris,+France" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                  <div className={styles.infoItem}>
                    <MapPin className={styles.icon} />
                    <div>
                      <h3>France</h3>
                      <p>13, Rue Des Petites, Ecuries 75010,<br/>Paris, France</p>
                    </div>
                  </div>
                </a>

                <a href="tel:+912266739517" className={styles.infoLink}>
                  <div className={styles.infoItem}>
                    <Phone className={styles.icon} />
                    <div>
                      <h3>Phone</h3>
                      <p>+91 22 66739517<br/>+91 22 66734124</p>
                    </div>
                  </div>
                </a>

                <a href="mailto:careers@livepixeltechnologies.com" className={styles.infoLink}>
                  <div className={styles.infoItem}>
                    <Mail className={styles.icon} />
                    <div>
                      <h3>Email</h3>
                      <p>careers@livepixeltechnologies.com</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className={styles.contactForm}>
              <div className={styles.formCard}>
                <h2>Send us a Message</h2>
                {submitted ? (
                  <div className={styles.successMessage}>
                    <h3>Thank you for reaching out!</h3>
                    <p>We have received your message and will get back to you shortly.</p>
                    <button onClick={() => setSubmitted(false)} className={styles.resetBtn}>Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="message">Message *</label>
                      <textarea 
                        id="message" 
                        required 
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
