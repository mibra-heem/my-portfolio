import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Full Stack Flutter Developer",
  author: "Muhammad Ibrahim",
  description:
    "Software Engineer based in Lahore, Pakistan. I specialize in android application design & development.",
  lang: "en",
  siteLogo: "/ibrahim.jpg",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Tech Stack", href: "#skills" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Contributions", href: "#contributions" },
    // { text: "Education", href: "#education" },

  ],
  socialLinks: [
    { text: "", icon: 'github.svg', href: "https://github.com/mibra-heem" },
    { text: "", icon: 'linkedin.svg', href: "https://www.linkedin.com/in/muhammad-ibrahim-6b9aa4250/" },
    { text: "", icon: 'youtube.svg', href: "https://www.youtube.com/@m.ibraheem-dev" },
    { text: "", icon: 'instagram.svg', href: "https://www.instagram.com/ibra_heem.dev/" },
    { text: "", icon: 'facebook.svg', href: "https://www.facebook.com/profile.php?id=61579216200868" },
    { text: "", icon: 'x.svg', href: "https://x.com/ibraheem_dev" },
    // { text: "Upwork", icon: '', href: "https://www.upwork.com/freelancers/~010bdb8852c27dcff7" },
    // { text: "Fiverr", icon: '', href: "https://www.fiverr.com/sellers/mibra_heem/edit" },

  ],
  socialImage: "/portfolio-cover.jpg",
  canonicalURL: "https://mibraheem-dev.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Muhammad Ibrahim",
    specialty: "Flutter Developer",
    summary:
      "I create sleek, high-performance Flutter apps with smooth UIs and seamless backend integration — built for speed, scalability, and user delight.",
    tagline: "Bringing ideas to life with clean code and beautiful UI.",
    email: "ibraheem.dev.pk@gmail.com",
  },
  about: {
    description: `
      Hi, I’m Muhammad Ibrahim — a Flutter Developer with 2.5+ years of experience building high-performance Android apps. I specialize in crafting pixel-perfect, responsive UIs from Figma designs and integrating APIs for seamless backend communication. My expertise spans both client and server side — from authentication and cloud databases to secure file storage, real-time features, and interactive maps. 
      With strong backend api development skills in Laravel and MySQL, I focus on clean code, scalability, and performance optimization to deliver fast, smooth, and user-centric mobile experiences. Let’s build something impactful together.`,
    image: "/ibrahim.png",
  },
  skills: [
    { name: "Android", icon: "android.svg" },
    { name: "Flutter", icon: "flutter.svg" },
    { name: "Dart", icon: "dart.svg" },
    { name: "Firebase", icon: "firebase.svg" },
    { name: "Supabase", icon: "supabase.svg" },
    { name: "PHP", icon: "php.svg" },
    { name: "Laravel", icon: "laravel.svg" },
    { name: "MySQL", icon: "mysql.svg" },
    { name: "XAMPP", icon: "xampp.svg" },
    { name: "GitHub", icon: "github.svg" },
    { name: "Git Bash", icon: "gitbash.svg" },
    { name: "Mapbox", icon: "mapbox.svg" },
    { name: "Stripe", icon: "stripe.svg" },
    { name: "Agora SDK", icon: "agora.svg" },
    { name: "Canva", icon: "canva.svg" },
    { name: "VS Code", icon: "visualstudiocode.svg" },

  ],
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
      position: "Full Stack Flutter Developer - Remote",
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
      summary: "A real-time chat app with Firebase Auth, Firestore messaging, message seen status, profile customization, contact management, and Agora-based audio calling. Laravel handles backend APIs.",
      linkPreview: "https://github.com/mibra-heem/chat_app_flutter/tree/main?tab=readme-ov-file#-video-demo-",
      linkSource: "https://github.com/mibra-heem/chat_app_flutter",
      // linkTryApk: "/",
      image: "/mustye-cover.png",
    },
    {
      name: "Mohart",
      summary: "This e-commerce app offers a smooth shopping experience, like product browsing, detailed product pages, a modern checkout flow, Stripe integrated for online payments. User can manage cart and securely place orders.",
      linkPreview: "https://github.com/mibra-heem/ecommerce-app?tab=readme-ov-file#-video-demo-",
      linkSource: "https://github.com/mibra-heem/ecommerce-app",
      // linkTryApk: "/",
      image: "/mohart-cover.png",
    },
    {
      name: "Mohart Admin",
      summary: "Mohart Admin App is a Flutter-based eCommerce admin panel for managing products, categories, and banners with real-time Laravel backend integration.",
      linkPreview: "https://github.com/mibra-heem/ecommerce_admin_app?tab=readme-ov-file#-video-demo-",
      linkSource: "https://github.com/mibra-heem/ecommerce_admin_app",
      // linkTryApk: "/",
      image: "/mohart-admin-cover.png",
    },
    {
      name: "Reminiss",
      summary: "Reminiss is a personal memory app that lets users capture experiences and attach them to locations. Built with Supabase authentication and Mapbox maps for seamless saving and revisiting of places.",
      linkPreview: "",
      linkSource: "https://github.com/mibra-heem/reminiss",
      // linkTryApk: "/",
      image: "/reminiss-cover.png",
    },
    {
      name: "Hugh & Bucks",
      summary: `A resturant app with 3 sections community (admin), vendor & customer. Admin adds vendor shop which shows to the customers.
      They can purhase items, for recieving the vendor scans customer's QR Code, on success the customer will receive the item.`,
      linkPreview: "",
      linkSource: "",
      // linkTryApk: "/",
      image: "/hugh-bucks-cover.png",
    },
  ],
  contributions: [
    {
      name: "Otpify Package",
      summary: "A highly customizable OTP (One-Time Password) input field widget for Flutter, designed to provide a seamless user experience. The widget includes a resend OTP timer button, ensuring user convenience while maintaining functionality.",
      demoLink: "https://github.com/mibra-heem/otpify?tab=readme-ov-file#otpify-example",
      linkSource: "https://pub.dev/packages/otpify",
      image: "/otpify-cover.png",
    },
  ],
  education: [
    {
      college: "University Of Gujrat",
      subject: "B.Sc. in Computer Science",
      startDate: "Sep 2019",
      endDate: "Sep 2023",
      location: "Gujrat, Pakistan",
    },
    {
      college: "Punjab Group Of Colleges",
      subject: "F.Sc. Pre-Engineering",
      startDate: "Sep 2017",
      endDate: "May 2019",
      location: "Sahiwal, Pakistan",
    },
    {
      college: "The Educators",
      subject: "SSC – Science Group",
      startDate: "May 2015",
      endDate: "May 2017",
      location: "Jaranwala, Pakistan",
    },
  ],
};

// #5755ff
