import { 
  Briefcase, 
  MapPin, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Globe,
  GraduationCap,
  Award
} from "lucide-react";
import React from 'react';

export const profileData = {
  name: "Ahmad Fakhrul Hadi",
  role: "Software Developer",
  location: "Kuala Lumpur, MY",
  sex: "Male",
  email: "hadiayo39@gmail.com",
  phone: "+60 16-6468300",
  web: "hadiayo.site",
  pronunciation: "Ahmad Fakhrul Hadi",
  github: "FaHadiiii",
  openToWork: true,
};

export const aboutBullets = [
  "Software Developer turning ideas into pixel-perfect apps.",
  "Flutter, React, and modern web tech — crafting smooth, delightful experiences.",
  "Obsessed with clean UI, smart design systems, and seamless UX.",
  "Crafting scalable, polished, and user-focused products.",
];

export const skills = [
  { name: "Next JS", slug: "nextdotjs", invertDark: true },
  { name: "React", slug: "react" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Express JS", slug: "express", invertDark: true },
  { name: "MySQL", slug: "mysql" },
  { name: "Docker", slug: "docker" },
  { name: "Drizzle", slug: "drizzle" },
  { name: "Flutter", slug: "flutter" },
  { name: "Figma", slug: "figma" },
  { name: "Dart", slug: "dart" },
  { name: "Bruno", slug: "bruno", invertDark: true },
  { name: "GCP", slug: "googlecloud" },
  { name: "Firebase", slug: "firebase" },
  { name: "Git", slug: "git" },
  { name: "Redis", slug: "redis" },
];

export const experiences = [
  {
    company: "ForthNorth Technologies Sdn. Bhd.",
    logo: "/logo/fnt.webp",
    role: "Software Engineer (Mobile)",
    type: "Contract",
    period: "2025 — Present",
    duration: "1+ year",
    current: true,
    achievements: [
      "Built an offshore crew management mobile app from scratch.",
      "Maintained and enhanced an e-commerce agent management app.",
      "Developed a customer-facing e-commerce mobile application.",
      "Designed and prototyped system UI and UX.",
      "Managed deployments to the App Store and Google Play Store.",
    ],
    tags: ["Flutter", "Dart", "Figma", "Firebase", "Git"],
  },
  {
    company: "Todak Digitech Sdn. Bhd.",
    logo: "/logo/tdk.png",
    role: "Software Developer Intern",
    type: "Internship",
    period: "2024 — 2025",
    duration: "6 months",
    achievements: [
      "Refactored a mobile app to improve code quality and maintainability.",
      "Contributed to the development of an internal student management system.",
      "Built and maintained websites using WordPress.",
    ],
    tags: ["Flutter", "Dart", "WordPress", "Laravel", "Git"],
  },
  {
    company: "JPN Terengganu",
    logo: "/logo/jpnt.png",
    role: "IT Intern",
    type: "Internship",
    period: "2021 — 2022",
    duration: "6 months",
    achievements: [
      "Provided technical support for hardware and software issues.",
      "Assisted in system setup, configuration, and maintenance.",
      "Developed a data dashboard for IT operations and analytics.",
    ],
    tags: ["Power BI", "Excel", "Google Apps Script"],
  },
];

export const education = [
  {
    institution: "Universiti Tun Hussein Onn (UTHM)",
    degree: "Bachelor of Computer Science (Software Engineering) with Honors",
    period: "2022 — 2025",
    description: "CGPA: 3.74",
    achievements: [
      "Dean's List Award for outstanding academic performance across multiple semesters.",
      "Developed a mobile application for the final year project using Flutter and Firebase.",
      "Participated in national-level innovation competitions.",
    ],
    tags: [
      "Software Engineering",
      "Mobile App Dev",
      "Database Design",
      "System Design",
      "Web Dev",
    ],
  },
  {
    institution: "Universiti Tun Hussein Onn (UTHM)",
    degree: "Diploma in Information Technology",
    period: "2019 — 2022",
    description: "CGPA: 3.82",
    achievements: [
      "Dean's List Award for outstanding academic performance across multiple semesters.",
      "Developed a mobile application for the final year project using Unity3D and Vuforia.",
    ],
    tags: [
      "IT Fundamentals",
      "Networking",
      "Hardware",
      "Operating System",
      "Database",
    ],
  },
];

export const projects = [
  {
    name: "BolaJom",
    description:
      "Building a platform to streamline football venue booking while helping players organise matches and connect within the community.",
    tags: [
      "Express.js",
      "MySQL",
      "Flutter",
      "Figma",
      "Redis",
      "Meilisearch",
      "Firebase",
      "Docker",
    ],
    href: "",
    status: "Ongoing",
    logo: "/logo/bolajom.png",
  },
  {
    name: "e-Portfolio",
    description:
      "Interactive portfolio website built with Next.js and Tailwind CSS. Showcasing projects, skills, and experience with a focus on clean design.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://hadiayo.site",
    status: "Live",
    logo: "/logo/portfolio.png",
  },
  {
    name: "OptimaBank: Loyalty Reward",
    description:
      "Developed as part of a certificate requirement for Khazanah Nasional. The primary responsibility involved building the backend using Express.js and MySQL, ensuring secure and efficient data handling for user rewards and transactions.",
    tags: ["Express.js", "MySQL", "React", "Render", "Figma"],
    href: "",
    status: "Archived",
    logo: "/logo/optima.png",
  },
  {
    name: "Hustl: Job Hunting Tracker",
    description:
      "Hustl is a mobile application developed with Flutter. The objective is to help job seekers to organize their job applications and enhance thir experience with AI Insights.",
    tags: ["Flutter", "Dart", "AppScript", "GCP"],
    href: "",
    status: "Archived",
    logo: "/logo/hustl.jpg",
  },
  {
    name: "Childcare Digital Book",
    description:
      "Childcare digital book is a mobile application developed as my bachelor's final year project with aim to help digitalize childcare and infants medical checkup.",
    tags: ["Flutterflow", "Firebase", "GCP"],
    href: "",
    status: "Archived",
    logo: "/logo/childcare.jpeg",
  },
  {
    name: "ARJirim",
    description:
      "ARJIrim is a mobile application developed as my diplomas's final year project. Developed using Unity 3D and Vuforia AR Engine aim to help standard fourth graders to learn matter topic interactively.",
    tags: ["Unity 3D", "Vuforia", "C#"],
    href: "",
    status: "Archived",
    logo: "/logo/arjirim.jpg",
  },
];

export const certificates = [
  {
    title: "Certificate of GIFT Program Completion",
    issuer: "Khazanah Nasional Berhad",
    date: "Apr 2025",
    link: "https://media.licdn.com/dms/image/v2/D562DAQGtwtcz7p1qHA/profile-treasury-document-cover-images_480/B56ZgDxd5DHYBI-/0/1752409959906?e=1774767600&v=beta&t=GNlsLHrbxmrTeDubiGbCwqyHCwZayVW-NoljXgDaiOs",
    iconType: 'graduation',
  },
  {
    title: "International Research And Innovation Symposium And Exposition",
    issuer: "UTHM",
    date: "Jun 2024",
    link: "https://media.licdn.com/dms/image/v2/D562DAQGNWUZbxGP0Sw/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1736915400754?e=1774767600&v=beta&t=LVhD5HLEUtSCq3ybQLovlojVsF7LCcjgeFgOL2U0wVU",
    iconType: 'award',
  },
  {
    title: "Flutter & Dart - The Complete Guide",
    issuer: "Udemy",
    date: "Mar 2024",
    link: "https://www.udemy.com/certificate/UC-cb881248-bc04-4b94-856b-441b7a1bccca/",
    iconType: 'graduation',
  },
  {
    title:
      "Virtual International Research And Innovation Symposium And Exposition",
    issuer: "UTHM",
    date: "Feb 2022",
    link: "https://media.licdn.com/dms/image/v2/D562DAQGIsYwGIIFoFw/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1736915489559?e=1774767600&v=beta&t=YXfxb9-S7B74RWNQT966u7M9zIiC6VbzMbxURTpIW7Y",
    iconType: 'award',
  },
];
