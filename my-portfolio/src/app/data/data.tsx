import { Job, Project } from "../types/type";

import twitter from "@/components/icons/twitter.svg";
import linkedin from "@/components/icons/linkedin.svg";
import github from "@/components/icons/github.svg";
import website from "@/components/icons/globe.svg";
import instagram from "@/components/icons/instagram.svg";
export const jobData: Job[] = [
  {
    id: "0",
    title: "WISESTEP",
    role: "Full Stack Engineer",
    timeline: "Mar 2024 - Sep 2024",
    description: [
      "Developed scalable B2B modules that automated key workflows like timesheet management and custom fields creation, empowering businesses to streamline their data handling processes effortlessly.",
      "Spearheaded a centralized CSV export system, optimized filtering and sorting mechanisms for real-time reporting, cutting manual effort by 50%, and drastically enhancing the accuracy of decision-making data.",
      "Developed reusable UI components, such as search dropdowns and range sliders, leading to a 30% increase in user interaction and satisfaction.",
      "Refined system reliability by fixing over 15+ critical bugs and optimizing existing modules, ensuring smooth user experiences across different environments.",
      "Worked closely with stakeholders to shape product architecture, ensuring the entire system was modular, extensible, and responsive to evolving client needs.",
    ],
    stack: [
      "Next.js",
      "React.js",
      "Typescript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
    ],
    link: "https://wisestep.com",
  },
  {
    id: "1",
    title: "ITLSCO LLP",
    role: "Software Engineer",
    timeline: "Aug 2023 - Mar 2024",
    description: [
      "Engineered SIMGILE, a suite of 12+ interconnected B2B apps designed to streamline business processes, leading to a 40% boost in efficiency for both startups and enterprise teams.",
      "Designed collaborative tools—from task management to document repositories—enhancing cross-functional team collaboration and resource centralization.",
      "Architected scalable microservices to support SIMGILE’s seamless expansion, leveraging J2EE, JPA, and MySQL, which optimized the app’s modularity and performance.",
      "Built financial tools for tracking CAPEX and OPEX, delivering real-time financial insights and enabling stakeholders to make data-driven decisions faster.",
    ],
    stack: ["Java", "JSF", "J2EE", "Eclipse link", "MySQL"],
    link: "https://itlsco.com",
  },
  {
    id: "2",
    title: "ITLSCO LLP",
    role: "Software Engineer Intern",
    timeline: "May 2022 - Jul 2023",
    description: [
      "Led the development of an IoT-based customer-oriented J2EE web application, enhancing real-time interactions between users and IoT devices.",
      "Applied OOP principles to build modular, maintainable code, leading to a highly scalable application structure.",
      "Successfully deployed microservices to seamlessly integrate with the system’s core, improving overall functionality and scalability.",
      "Implemented CI/CD pipelines using Jenkins, optimizing the release process and enhancing development lifecycle speed.",
      "Spearheaded an AI/ML Proof of Concept leveraging PyTorch, TensorFlow, and AWS IoT, achieving image digit extraction and driving enhanced system functionality.",
      "Optimized database management using MySQL, ensuring scalable data storage, retrieval, and improved system performance.",
    ],
    stack: ["Java EE", "Microservices", "Jenkins", "AI/ML", "MySQL"],
    link: "https://itlsco.com",
  },
];

export const social = [
  { href: "https://github.com/rothardo", src: github, alt: "GitHub" },
  {
    href: "https://linkedin.com/in/ashwintemkar",
    src: linkedin,
    alt: "LinkedIn",
  },
  { href: "https://twitter.com/rothardo", src: twitter, alt: "Twitter" },
  { href: "https://ashwintemkar.com", src: website, alt: "Website" },
  {
    href: "https://instagram.com/rothardo",
    src: instagram,
    alt: "Instagram",
  },
];

export const projectData: Project[] = [
  {
    id: "1",
    name: "Portfolio Website",
    description: "A personal website to showcase my projects and blog posts.",
    githubUrl: "https://github.com/username/portfolio",
    liveDemoUrl: "https://username.github.io/portfolio",
    techStack: ["React", "Tailwind CSS", "TypeScript", "Vercel"],
    image: github,
    hoverText: "Check out my portfolio project!",
  },
  {
    id: "2",
    name: "E-commerce Store",
    description:
      "An online store with product listings, cart, and checkout features.",
    githubUrl: "https://github.com/username/ecommerce-store",
    liveDemoUrl: "https://ecommerce-store.example.com",
    techStack: ["Next.js", "Node.js", "MongoDB", "Stripe API"],
    image: github,
    hoverText: "Explore the e-commerce store project!",
  },
  // Add more projects as needed
];

export const technologies = [
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "MySQL",
  "Prisma",
  "Docker",
  "AWS",
  "Tailwind CSS",
];
