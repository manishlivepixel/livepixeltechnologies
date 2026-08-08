"use client";

import Navbar from "@/components/Navbar";
import styles from "./ProjectsPage.module.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "@/components/ProjectModal";
import { projectsList } from "./projectsData";

const BASE_URL = "https://www.livepixeltechnologies.com";
const categories = ["All", "Colorization", "Restoration", "Animation", "VFX / CG", "Multimedia", "Channel Packaging", "Documentary", "Museums", "Web App"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const filteredProjects = projectsList.filter(p => 
    activeFilter === "All" ? true : p.category === activeFilter
  );

  return (
    <main>
      <Navbar />
      
      <div className={`section ${styles.pageHeader}`}>
        <div className="container">
          <h1 className={styles.title}>Selected <span className="accent-gradient">Projects</span></h1>
          <p className={styles.subtitle}>A showcase of our cinematic restoration, colorization, and visual effects.</p>
        </div>
      </div>

      <div className={`section ${styles.contentSection}`}>
        <div className="container">
          
          <div className={styles.filters}>
            {categories.map((filter) => (
              <button 
                key={filter} 
                className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div layout className={styles.galleryGrid}>
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id} 
                  className={styles.projectCard}
                  onClick={() => setSelectedProject(project)}
                >
                  <img src={`${BASE_URL}/${project.image}`} alt={project.title} onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }} />
                  <div className={styles.projectOverlay}>
                    <h3>{project.title}</h3>
                    <span>{project.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>

      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </main>
  );
}
