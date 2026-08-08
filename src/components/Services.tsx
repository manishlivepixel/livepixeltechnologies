"use client";

import { motion } from "framer-motion";
import styles from "./Services.module.css";
import { Film, Paintbrush, Cuboid, MonitorPlay, Smartphone, Tv, Video, Landmark } from "lucide-react";
import React from "react";
import Link from "next/link";

const services = [
  { icon: <Paintbrush />, title: "Colorization", slug: "colorization", desc: "Breathing new life into valuable B&W materials." },
  { icon: <Film />, title: "Restoration", slug: "restoration", desc: "Preserving heritage and cinematic history." },
  { icon: <Cuboid />, title: "2D / 3D Animation", slug: "animation", desc: "End-to-end animation production solutions." },
  { icon: <MonitorPlay />, title: "VFX / CG", slug: "vfx", desc: "Captivating digital imagery for films and TV." },
  { icon: <Smartphone />, title: "Web / Mobile App", slug: "web-app", desc: "Exploring new ideas in digital experiences." },
  { icon: <Tv />, title: "Channel Packaging", slug: "channel-packaging", desc: "Outstanding personality for your channel." },
  { icon: <Video />, title: "Documentary / AVS", slug: "documentary", desc: "Feature films and short films production." },
  { icon: <Landmark />, title: "Museums / Theme Parks", slug: "museums", desc: "Immersive and interactive spatial solutions." },
];

export default function Services() {
  return (
    <section className={`section ${styles.servicesSection}`} id="services">
      <div className={`container`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Our <span className="accent-gradient">Expertise</span></h2>
          <p className={styles.subtitle}>End-to-end solutions in the visual entertainment spectrum.</p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <Link href={`/services/${service.slug}`} key={index}>
              <motion.div 
                className={`${styles.card}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.iconWrapper}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
