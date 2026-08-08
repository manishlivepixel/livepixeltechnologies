"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import styles from "./ProjectModal.module.css";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: any;
}

const BASE_URL = "https://www.livepixeltechnologies.com";

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.overlay} onClick={onClose}>
          <motion.div
            className={styles.modalContent}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={onClose}>
              <X size={24} />
            </button>
            
            <div className={styles.header}>
              <h2 className="accent-gradient">{project.title}</h2>
              <span className={styles.category}>{project.category}</span>
            </div>

            <div className={styles.mediaContainer}>
              {project.modal?.type === "before-after" && (
                <BeforeAfterSlider 
                  beforeImage={`${BASE_URL}/${project.modal.imageBefore}`} 
                  afterImage={`${BASE_URL}/${project.modal.imageAfter}`} 
                />
              )}

              {project.modal?.type === "video" && (
                <iframe 
                  className={styles.videoFrame}
                  src={project.modal.videoUrl} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              )}

              {(project.modal?.type === "image" || !project.modal) && (
                <img 
                  className={styles.highResImage}
                  src={`${BASE_URL}/${project.modal?.imageHighRes || project.image}`} 
                  alt={project.title}
                />
              )}
            </div>

            {project.modal?.caption && (
              <div className={styles.caption}>
                <p>{project.modal.caption}</p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
