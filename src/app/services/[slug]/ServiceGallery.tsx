"use client";

import { useState } from "react";
import styles from "./ServicePage.module.css";
import ProjectModal from "@/components/ProjectModal";

const BASE_URL = "https://www.livepixeltechnologies.com";

export default function ServiceGallery({ projects }: { projects: any[] }) {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <>
      <div className={styles.gallery}>
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={styles.imageWrapper}
            onClick={() => setSelectedProject(project)}
          >
            <img 
              src={`${BASE_URL}/${project.image}`} 
              alt={project.title} 
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }} 
            />
            <div className={styles.projectTitle}>
              <p>{project.title}</p>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </>
  );
}
