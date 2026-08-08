"use client";

import { motion, AnimatePresence } from "framer-motion";
import styles from "./Portfolio.module.css";
import React, { useState, useMemo } from "react";
import projectsData from "../../projects.json";
import BeforeAfterSlider from "./BeforeAfterSlider";
import Image from "next/image";

// Extract unique categories for filters
const categories = ["All", ...Array.from(new Set(projectsData.map(p => p.category)))];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const allFilteredProjects = useMemo(() => {
    return activeFilter === "All" 
      ? projectsData 
      : projectsData.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const displayedProjects = useMemo(() => {
    return allFilteredProjects.slice(0, visibleCount);
  }, [allFilteredProjects, visibleCount]);

  // Reset count when filter changes
  React.useEffect(() => {
    setVisibleCount(12);
  }, [activeFilter]);

  return (
    <section className={`section`} id="work">
      <div className={`container`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Selected <span className="accent-gradient">Work</span></h2>
          <div className={styles.filters}>
            {categories.map((filter) => (
              <button 
                key={filter} 
                className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === "tv" ? "TV Shows" : filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className={styles.masonryGrid}>
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                layout
                className={`${styles.projectCard}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className={styles.projectImagePlaceholder}>
                  {project.image ? (
                    <Image 
                      src={`https://www.livepixeltechnologies.com/${project.image}`} 
                      alt={project.title}
                      className={styles.projectImg}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : null}
                  <div className={styles.projectOverlay}>
                    <h3>{project.title}</h3>
                    <span>{project.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {visibleCount < allFilteredProjects.length && (
          <div className={styles.loadMoreContainer}>
            <button 
              className={styles.loadMoreBtn}
              onClick={() => setVisibleCount(prev => prev + 24)}
            >
              Load More Projects ({allFilteredProjects.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className={styles.closeBtn} 
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              
              <div className={`${styles.modalImageContainer} ${selectedProject.modal?.type === "video" ? styles.videoMode : ""}`}>
                {selectedProject.modal?.type === "video" && selectedProject.modal?.videoUrl ? (
                  <iframe 
                    src={`${selectedProject.modal.videoUrl}?autoplay=1`}
                    title={selectedProject.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: '100%', height: '100%', borderRadius: '8px', border: 'none' }}
                  />
                ) : selectedProject.modal?.type === "before-after" && selectedProject.modal?.imageBefore ? (
                  <BeforeAfterSlider 
                    beforeImage={`https://www.livepixeltechnologies.com/${selectedProject.modal.imageBefore}`}
                    afterImage={`https://www.livepixeltechnologies.com/${selectedProject.modal.imageAfter}`}
                  />
                ) : (
                  <Image 
                    src={`https://www.livepixeltechnologies.com/${selectedProject.modal?.imageAfter || selectedProject.image}`} 
                    alt={selectedProject.title}
                    className={styles.modalImg}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="100vw"
                  />
                )}
              </div>
              
              <div className={styles.modalInfo}>
                <h2>{selectedProject.title}</h2>
                <div className={styles.modalMeta}>
                  <span className={styles.modalCategory}>{selectedProject.category}</span>
                </div>
                {selectedProject.modal?.caption && (
                  <p className={styles.modalCaption}>{selectedProject.modal.caption}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
