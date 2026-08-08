"use client";

import Navbar from "@/components/Navbar";
import styles from "./CareerPage.module.css";
import { useState } from "react";
import { ChevronDown, Upload, Send } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "2D Animators - Toon Boom",
    details: [
      {
        level: "Junior Level",
        reqs: [
          "Degree or Diploma holder from a recognized Animation Institute.",
          "1-2 Years in 2D Character Animation.",
          "Strong proficiency in Toon Boom Harmony.",
          "Understand core animation principles (staging, exaggeration, timing).",
          "Good sense of motion, weight, emotion, and acting."
        ]
      },
      {
        level: "Senior Level",
        reqs: [
          "Degree or Diploma holder from a recognized Animation Institute.",
          "3-4+ Years in 2D Character Animation.",
          "Excellent proficiency in Toon Boom Harmony.",
          "Strong understanding of acting, timing, rhythm, and storytelling.",
          "Highly skilled in creating high-quality key poses with strong draftsmanship."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Project Coordinator (Exhibit Design)",
    details: [
      {
        level: "Contractual Role (3 Months)",
        reqs: [
          "Bachelor's degree in Exhibit Design, Interior Design, Architecture, or Museum Studies.",
          "Minimum 2 Years professional experience.",
          "Good communication and presentation skills.",
          "Responsible for communication with clients and backend teams.",
          "Location: Science City, Ahmedabad. Salary: ₹20,000 - ₹25,000 per month."
        ]
      }
    ]
  }
];

export default function CareerPage() {
  const [openJob, setOpenJob] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleJob = (id: number) => {
    setOpenJob(openJob === id ? null : id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <main>
      <Navbar />
      
      <div className={`section ${styles.pageHeader}`}>
        <div className="container">
          <h1 className={styles.title}>Join Our <span className="accent-gradient">Team</span></h1>
          <p className={styles.subtitle}>We are looking for creative thinkers, innovators, and dreamers.</p>
        </div>
      </div>

      <div className={`section ${styles.contentSection}`}>
        <div className="container">
          
          <div className={styles.grid}>
            
            <div className={styles.jobsList}>
              <h2 className={styles.sectionTitle}>Open Positions</h2>
              
              <div className={styles.accordion}>
                {jobs.map((job) => (
                  <div key={job.id} className={`${styles.accordionItem} glass`}>
                    <button 
                      className={styles.accordionHeader} 
                      onClick={() => toggleJob(job.id)}
                    >
                      <h3>{job.title}</h3>
                      <ChevronDown 
                        className={`${styles.chevron} ${openJob === job.id ? styles.rotated : ""}`} 
                      />
                    </button>
                    
                    <div className={`${styles.accordionContent} ${openJob === job.id ? styles.open : ""}`}>
                      {job.details.map((detail, i) => (
                        <div key={i} className={styles.jobDetail}>
                          <h4>{detail.level}</h4>
                          <ul>
                            {detail.reqs.map((req, j) => (
                              <li key={j}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.applicationForm}>
              <div className={`${styles.formCard} glass`}>
                <h2>Apply Now</h2>
                {submitted ? (
                  <div className={styles.successMessage}>
                    <h3>Application Submitted!</h3>
                    <p>Thank you for applying. We will review your profile and contact you shortly.</p>
                    <button onClick={() => setSubmitted(false)} className={styles.resetBtn}>Submit another application</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                      <label>Name *</label>
                      <input type="text" required placeholder="Your Name" />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label>Email *</label>
                      <input type="email" required placeholder="Your Email" />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label>Contact Number *</label>
                      <input type="tel" required placeholder="Your Phone Number" />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Apply For *</label>
                      <select required>
                        <option value="">Select a Profile</option>
                        <option value="2D Animator Intermediate">2D Animator Intermediate Level</option>
                        <option value="2D Animator Senior">2D Animator Senior Level</option>
                        <option value="Compositor">Compositor</option>
                        <option value="Storyboard Artist">Storyboard Artist</option>
                        <option value="Project Coordinator">Project Coordinator</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label>Upload Resume * (.pdf, .doc)</label>
                      <div className={styles.fileUpload}>
                        <input type="file" id="resume" required accept=".pdf,.doc,.docx" />
                        <label htmlFor="resume" className={styles.fileLabel}>
                          <Upload size={20} /> Choose File
                        </label>
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label>Message (Optional)</label>
                      <textarea rows={4} placeholder="Tell us why you are a great fit..."></textarea>
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Apply"} <Send size={18} />
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
