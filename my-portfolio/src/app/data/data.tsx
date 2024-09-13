import { Job } from "../types/type";

export const jobData: Job[] = [
  {
    id: "1",
    title: "ITLSCO LLP",
    role: "Software Engineer",
    timeline: "Aug 2023 - Mar 2024 (8 months)",
    description: [
      "Engineered SIMGILE, a suite of 12+ interconnected B2B apps designed to streamline business processes, leading to a 40% boost in efficiency for both startups and enterprise teams.",
      "Designed collaborative tools—from task management to document repositories—enhancing cross-functional team collaboration and resource centralization.",
      "Architected scalable microservices to support SIMGILE’s seamless expansion, leveraging J2EE, JPA, and MySQL, which optimized the app’s modularity and performance.",
      "Built financial tools for tracking CAPEX and OPEX, delivering real-time financial insights and enabling stakeholders to make data-driven decisions faster.",
    ],
    stack: ["Java EE", "JPA", "MySQL", "Microservices", "RESTful APIs"],
  },
  {
    id: "2",
    title: "ITLSCO LLP",
    role: "Software Engineer Intern",
    timeline: "May 2022 - Jul 2023 (1 yr 3 mos)",
    description: [
      "Led the development of an IoT-based customer-oriented J2EE web application, enhancing real-time interactions between users and IoT devices.",
      "Applied OOP principles to build modular, maintainable code, leading to a highly scalable application structure.",
      "Successfully deployed microservices to seamlessly integrate with the system’s core, improving overall functionality and scalability.",
      "Implemented CI/CD pipelines using Jenkins, optimizing the release process and enhancing development lifecycle speed.",
      "Spearheaded an AI/ML Proof of Concept leveraging PyTorch, TensorFlow, and AWS IoT, achieving image digit extraction and driving enhanced system functionality.",
      "Optimized database management using MySQL, ensuring scalable data storage, retrieval, and improved system performance.",
    ],
    stack: ["Java EE", "Microservices", "Jenkins", "AI/ML", "MySQL"],
  },
];
