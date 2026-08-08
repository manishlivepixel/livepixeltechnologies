import Navbar from "@/components/Navbar";
import styles from "./AboutPage.module.css";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      <div className={`section ${styles.pageHeader}`}>
        <div className="container">
          <h1 className={styles.title}>About <span className="accent-gradient">LivePixel</span></h1>
          <p className={styles.subtitle}>A complete entertainment and innovation producer blending creative and technical expertise.</p>
        </div>
      </div>

      <div className={`section ${styles.contentSection}`}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Who We Are</h2>
              <p>
                Live Pixel Technologies is a complete entertainment and innovation producer blending creative and technical expertise inspiring uniquely themed story driven ideas, imaginative concepts and creative content for channels from conception and design to execution and production. 
                Live Pixel Technologies provides hands-on turnkey solutions for the best in immersive and dynamic experiences. We offer our clients a contemporary, full-service approach that combines the best of what people and technology have to offer.
              </p>
              <p>
                Having our global footprint in the Visual Entertainment Industry Live Pixel Technologies offers an array of services and support in the Creative and Technology space and work across various medias, entertainment and edutainment spectrums. The diverse knowledge and expertise of our local resources and international talent put together, has resulted in meeting the needs of our clients across the world.
              </p>
            </div>

            <div className={styles.card}>
              <h2>Our Vision</h2>
              <h4 className="accent-gradient">A Thoughtful Vision</h4>
              <p>
                We embrace high technology vision and understanding of industry needs. Our core-competence is providing customized solutions. We are recognized in the media and entertainment space through our value propositions for original concepts, creative content talent pool and content production domain expertise.
              </p>
            </div>

            <div className={styles.card}>
              <h2>Our Mission</h2>
              <h4 className="accent-gradient">To be a Trendsetter</h4>
              <p>
                Our mission is to bring comprehensive knowledge process and business solutions to the commercial world via High-end Strategic Technology, Media and Entertainment Projects. We are a company that reinvents the realms of digital imagery and are future focused. We are technically equipped to cater to the entertainment industry and the needs of directors, advertisers, advertisement agencies, producers and production companies consolidated reputation.
              </p>
            </div>
            
            <div className={`${styles.card} ${styles.certifications}`}>
              <h2>Certifications</h2>
              <div className={styles.logos}>
                <img src="https://www.livepixeltechnologies.com/img_new/our_team/iso-certi-3.jpg" alt="ISO Certificate" className={styles.certImg} />
                <img src="https://www.livepixeltechnologies.com/img_new/our_team/TPN%20Logo.png" alt="TPN Logo" className={styles.certImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
