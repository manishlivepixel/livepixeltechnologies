import Navbar from "@/components/Navbar";
import styles from "./ClientsPage.module.css";
import Image from "next/image";

const clientsList = [
  "images/1_history.png", "images/2_bajaj.png", "images/3_gujrat.png", "images/4_uttarPradesh.png", 
  "images/5_LivingFoodz.png", "images/6_Zee.png", "images/7_epic.png", "images/8.png", 
  "images/9_films.png", "images/10.png", "images/11.png", "images/12.png", 
  "images/clientslogo/alzazeera.jpg", "images/clientslogo/children_film.jpg", "images/clientslogo/composite.jpg",
  "images/clientslogo/dbm.jpg", "images/clientslogo/dsk.jpg", "images/clientslogo/government_of_Gujarat.jpg",
  "images/clientslogo/leo.jpg", "images/clientslogo/nism.jpg", "images/clientslogo/prime_focus.jpg",
  "images/clientslogo/program_33.jpg", "images/clientslogo/sebi.jpg", "images/clientslogo/shapoorji.jpg",
  "images/clientslogo/tata_capital.jpg", "images/clientslogo/turner.jpg"
];

const associatesList = [
  "images/Associate/01_RADIANT_SIGNAGE.png",
  "images/Associate/02_COMPOSITE_FILMS.png",
  "images/Associate/03_GLOBAL_3_PICTURES.png",
  "images/Associate/04_WHITEBOARD_ENTERTAINMENT.png",
  "images/Associate/05_ANIMATION_TODAY.png"
];

const testimonials = [
  {
    name: "Sandeep K. Biswal",
    title: "Senior Manager, National Institute of Securities Markets",
    quote: "LivePixel has a reliable, professional and friendly team. We have worked with them on varied of projects. They took care of our expectations each time and have readily met all our requests for change. They are easier to approach, and are quite affordable. I will highly recommend them for any project involving audio-visuals.",
    image: "images/Sandip.jpg"
  },
  {
    name: "Sugato Banerji",
    title: "CMO, Videocon d2h Ltd.",
    quote: "We had a good experience working with LivePixel Technologies. We had done a 3d animation project with them to create a channel character. It was accomplished in time and cost with excellent creative output.",
    image: "images/Sugato_Banerji.jpg"
  }
];

const BASE_URL = "https://www.livepixeltechnologies.com";

export default function ClientsPage() {
  return (
    <main>
      <Navbar />
      
      <div className={`section ${styles.pageHeader}`}>
        <div className="container">
          <h1 className={styles.title}>Our <span className="accent-gradient">Clients</span></h1>
          <p className={styles.subtitle}>A vast experience of diligence with a vision to make the industry more cost effective and quality driven.</p>
        </div>
      </div>

      <div className={`section ${styles.contentSection}`}>
        <div className="container">
          
          <div className={`${styles.card} glass`}>
            <h2>Trusted By</h2>
            <div className={styles.logoGrid}>
              {clientsList.map((logo, i) => (
                <div key={i} className={styles.logoItem}>
                  <img src={`${BASE_URL}/${logo}`} alt="Client Logo" />
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.card} glass`}>
            <h2>Our Associates</h2>
            <div className={styles.logoGrid}>
              {associatesList.map((logo, i) => (
                <div key={i} className={styles.logoItem}>
                  <img src={`${BASE_URL}/${logo}`} alt="Associate Logo" />
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.card} glass`}>
            <h2>Client Testimonials</h2>
            <div className={styles.testimonialGrid}>
              {testimonials.map((test, i) => (
                <div key={i} className={styles.testimonialCard}>
                  <img src={`${BASE_URL}/${test.image}`} alt={test.name} className={styles.testImg} />
                  <p className={styles.quote}>"{test.quote}"</p>
                  <h4>{test.name}</h4>
                  <span>{test.title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
