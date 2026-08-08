import Navbar from "@/components/Navbar";
import styles from "./ServicePage.module.css";
import { notFound } from "next/navigation";
import { projectsList } from "@/app/projects/projectsData";
import ServiceGallery from "./ServiceGallery";

const BASE_URL = "https://www.livepixeltechnologies.com";

const serviceContent = {
  "colorization": {
    title: "Colorization",
    subtitle: "Bringing History to Life",
    description: "LivePixel Technologies possesses expertise in restoring, recoloring, and transforming black and white footage into vibrant color. We specialize in colorizing timeless classics, historical documentaries, and archival footage using advanced digital techniques that preserve the authenticity of the original material.",
    categoryFilter: "Colorization"
  },
  "restoration": {
    title: "Restoration",
    subtitle: "Preserving the Past",
    description: "Our digital restoration services breathe new life into damaged and aging film reels. Using state-of-the-art tools, we remove scratches, dust, and tears, stabilize footage, and correct color fading to ensure your films look as good as new, safeguarding them for future generations.",
    categoryFilter: "Restoration"
  },
  "animation": {
    title: "Animation 2D / 3D",
    subtitle: "Crafting Imaginary Worlds",
    description: "From conceptualization to final render, our animation studio creates captivating 2D and 3D animations. We deliver high-quality character animations, motion graphics, and visual storytelling for television, film, and commercial projects.",
    categoryFilter: "Animation"
  },
  "vfx": {
    title: "VFX / CG",
    subtitle: "Seamless Visual Effects",
    description: "Our VFX pipeline integrates seamlessly with live-action footage. We offer rotoscoping, match-moving, compositing, matte painting, and CGI integration to produce stunning visual effects that enhance the narrative of your film or commercial.",
    categoryFilter: "VFX / CG"
  },
  "multimedia": {
    title: "Multimedia Interactive",
    subtitle: "Engaging Digital Experiences",
    description: "We design and develop interactive multimedia solutions that captivate audiences. Whether it's an educational tool, corporate presentation, or an immersive digital experience, our team blends design and technology to deliver impactful results.",
    categoryFilter: "Multimedia"
  },
  "web-app": {
    title: "Web / Mobile App Designing",
    subtitle: "Innovative Digital Products",
    description: "Our UI/UX design team crafts intuitive and visually stunning web and mobile applications. We focus on user-centric design principles to ensure your digital products are not only beautiful but also highly functional and easy to use.",
    categoryFilter: "Web App"
  },
  "channel-packaging": {
    title: "Channel Packaging",
    subtitle: "Dynamic Broadcast Design",
    description: "We provide comprehensive channel packaging services, including idents, promos, lower thirds, and broadcast graphics. Our designs give your channel a unique identity that stands out in a crowded media landscape.",
    categoryFilter: "Channel Packaging"
  },
  "documentary": {
    title: "Documentary & AVS",
    subtitle: "Compelling Non-Fiction",
    description: "Our production team excels in creating powerful documentaries and audio-visual presentations. We handle everything from research and scripting to shooting and post-production, delivering compelling stories that inform and inspire.",
    categoryFilter: "Documentary"
  },
  "museums": {
    title: "Museums / Themes Parks",
    subtitle: "Immersive Spaces",
    description: "We create immersive and interactive exhibits for museums and theme parks. By combining cutting-edge technology with creative storytelling, we build physical spaces that offer visitors an unforgettable, engaging experience.",
    categoryFilter: "Museums"
  }
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = serviceContent[resolvedParams.slug as keyof typeof serviceContent];

  if (!service) {
    notFound();
  }

  const relatedProjects = projectsList.filter(p => p.category === service.categoryFilter);

  return (
    <main>
      <Navbar />
      
      <div className={`section ${styles.pageHeader}`}>
        <div className="container">
          <h1 className={styles.title}><span className="accent-gradient">{service.title}</span></h1>
          <p className={styles.subtitle}>{service.subtitle}</p>
        </div>
      </div>

      <div className={`section ${styles.contentSection}`}>
        <div className="container">
          
          <div className={`${styles.contentCard} glass`}>
            <p className={styles.description}>{service.description}</p>
            <ServiceGallery projects={relatedProjects} />
          </div>

        </div>
      </div>
    </main>
  );
}
