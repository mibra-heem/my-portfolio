import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Full Stack Flutter Developer",
  author: "Muhammad Ibrahim",
  description:
    "Software Engineer based in Lahore, Pakistan. I specialize in android application design & development.",
  lang: "en",
  siteLogo: "/ibrahim.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    // { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-ibrahim-6b9aa4250/" },
    { text: "Github", href: "https://github.com/mibra-heem" },
    // { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    // { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Muhammad Ibrahim",
    specialty: "Flutter Developer",
    summary:
      "Flutter Developer based in Lahore, Pakistan. I specialize in android application design & development.",
    email: "m.ibraheem4095332@gmail.com",
  },
  experience: [
    {
      company: "Solution Experts",
      position: "Mobile & Backend Web Developer",
      startDate: "Feb 2024",
      endDate: "Dec 2024",
      summary: [
        "Built Flutter admin apps for local businesses like electronics and real estate, displaying sales, purchases, and ledger data to support client operations.",
        "Developed REST APIs using PHP and CodeIgniter for seamless data integration in mobile and web platforms, focusing on financial and inventory metrics.",
        "Worked on real estate app features to track plots, filer/non-filer data, and blocks, ensuring user-friendly data visualization.",
        "Worked as a backend developer, enhancing web platforms with efficient API endpoints for business management.",
      ],
    },
    
    {
      company: "Media Design Expert",
      position: "Full Stack Flutter Developer",
      startDate: "Dec 2024",
      endDate: "Jan 2025",
      summary: [
        "Worked on production-level Flutter mobile applications, handling full development from Figma UI design to backend integration with PHP, and MySQL.",
        "Redesigned a Flutter app using Figma designs, delivering a polished, user-friendly interface.",
        "Conducted app testing across design & development stages to ensure functional, performant, and consistent UI/UX.",
      ],
    },
  ],
  projects: [
    {
      name: "Mustye",
      summary: "A real-time chatting app with audio call feature.",
      linkPreview: "/",
      linkSource: "https://github.com/mibra-heem/chat_app_flutter",
      linkTryApk: "/",
      image: "/mustye-cover.png",
    },
    {
      name: "Ecommerce App",
      summary: "An e-commerce platform that replicates Daraz/Alibaba key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      linkTryApk: "/",
      image: "/shopify-clon.png",
    },
    {
      name: "Admin Panel",
      summary: "An admin panel for controlling the ecommerce app.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      linkTryApk: "/",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, i am Muhammad Ibarhim, a Flutter Developer with over 2 years of experience in building high-quality Android applications. I specialize in turning Figma designs into clean, responsive user interfaces and integrating RESTful APIs for smooth backend communication. My backend expertise includes working with PHP (Laravel, CodeIgniter) and MySQL to build scalable and efficient systems. 
      I focus on optimizing app performance, ensuring fast data handling, and delivering a seamless user experience. With a strong eye for detail and a passion for clean code, I strive to create robust and user-friendly mobile solutions.`,
    image: "/ibrahim.png",
  },
};

// #5755ff
