import Navbar from "@/components/Navbar";
import styles from "./TeamPage.module.css";
import Image from "next/image";

const BASE_URL = "https://www.livepixeltechnologies.com";

const managementTeam = [
  {
    name: "Rajeev Dwivedi",
    role: "Founder & CEO",
    bio: "A Software Engineer by profession, an alumnus of C-DAC and JNU. With 15+ years of experience, he is the spearheading force behind the colorized version of Mughal-e-Azam and Sherlok Holmes series.",
    image: "images/management-rajeev-sir.jpg"
  },
  {
    name: "Uttara Dwivedi",
    role: "Co-founder & Creative Director",
    bio: "Graduated in Zoology, Uttara started her career in 2003 as Creative Director and Colorist. She contributed in creating artworks specializing in Landscape paintings and is the publisher of Animation Today.",
    image: "images/management-uttara-mam.jpg"
  },
  {
    name: "Asif Sheikh",
    role: "Technical Architect",
    bio: "A technology veteran with over 17 years of experience in Project/Program Management, Client Delivery, Software Product development, Data analytics and Product Support.",
    image: "images/asif.jpg"
  },
  {
    name: "Pankaj Dwivedi",
    role: "FinTech Consultant",
    bio: "A senior consultant with over 14 years of experience in financial services industry, specializing in Risk Management, Trading, Asset Management and Market Data systems.",
    image: "images/Pankaj.jpg"
  }
];

const coreTeam = [
  { name: "Samule F. Steininger", role: "Animation Director / Producer", image: "images/profile-2.jpg" },
  { name: "Sanjay Kumar", role: "Head - Colorization and Restoration", image: "img_new/our_team/sanjay.jpg" },
  { name: "Rupali Chaturvedi", role: "International Business Coordination", image: "img_new/our_team/rupali2.jpg" },
  { name: "Tapan Ramchandran", role: "Operations Head (3D, AR/VR)", image: "img_new/our_team/TapanRamchandran.jpg" },
  { name: "Sanjay Jangid", role: "Animation Designer and Consultant", image: "images/Sanjay Jangid.jpeg" },
  { name: "Sandeep Parab", role: "Team Leader", image: "img_new/our_team/sandeep2_fix.jpg" },
  { name: "Dinesh Tambe", role: "Motion Graphic Artist", image: "img_new/our_team/Dinesh Tambe_Pic_fix.jpg" },
  { name: "Mana Narayanan", role: "Head - IT Division", image: "img_new/our_team/mana2.jpg" },
  { name: "Archana Sinha", role: "Coloring & Art Design", image: "img_new/our_team/archana2.jpg" },
  { name: "Subhash Chetry", role: "Admin & Facilitation", image: "images/Subhash.jpg" }
];

export default function TeamPage() {
  return (
    <main>
      <Navbar />
      
      <div className={`section ${styles.pageHeader}`}>
        <div className="container">
          <h1 className={styles.title}>Management <span className="accent-gradient">Team</span></h1>
          <p className={styles.subtitle}>Meet the visionaries driving LivePixel Technologies forward.</p>
        </div>
      </div>

      <div className={`section ${styles.contentSection}`}>
        <div className="container">
          
          <div className={styles.managementGrid}>
            {managementTeam.map((member, i) => (
              <div key={i} className={styles.mgmtCard}>
                <div className={styles.imageWrapper}>
                  <img src={`${BASE_URL}/${member.image}`} alt={member.name} />
                </div>
                <div className={styles.mgmtInfo}>
                  <h2>{member.name}</h2>
                  <span className="accent-gradient">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.coreTeamSection}>
            <h2 className={styles.sectionTitle}>Our <span className="accent-gradient">Core Team</span></h2>
            <p className={styles.coreIntro}>
              A unique composition of talented concept artists, animators, visualisers, content writers, directors, filmmakers, and technology experts.
            </p>
            
            <div className={styles.coreGrid}>
              {coreTeam.map((member, i) => (
                <div key={i} className={styles.coreCard}>
                  <img src={`${BASE_URL}/${member.image}`} alt={member.name} className={styles.coreImg} />
                  <div className={styles.coreOverlay}>
                    <h3>{member.name}</h3>
                    <span>{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
