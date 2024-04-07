import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Gradutation,BTECH",
    location: "Lucknow, UP",
    description:
      "I am doing My graduation in Btech From Aktu University.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2026",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "I worked as a front-end developer for 3 months in Skillbee . Helped Early startup with My frontend Skills To land upon the New webite",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023  - July 2023",
  },

] as const;
export const projectsData = [
  {
    title: "GuruKul",
    description:
      "I developed  Elearning Application . A Robust Payment Gateway, Authentication system.A live Videoplayer users can watch videos comment about videos. ",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma","Redis","Cloudinary","VideoCipher","EJS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Story sail",
    description:
      "A Robust Blogging website with Nice authentication system and Blogging editing features.Used Appwrite as Backend.",
    tags: ["React", "Java Script", "Tailwind", "Redux","Appwrite","Multer"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Dashboard",
    description:
      "Developed a data visualization dashboard using D3.js, providing stakeholders with real-time insight and improving decision-making processes.",
    tags: ["React", "Redux", "express", "Tailwind", "helmet","Mui","MongoDB"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "SocialPedia",
    description:
      "Developed a socialmedia application like pintrest where users can upload pictures,like it and even Download it",
    tags: ["React", "Redux", "express", "Tailwind", "Socket.Io","Mui","MongoDB"],
    imageUrl: wordanalyticsImg,
  },{
    title: "FigPro",
    description:
      "Developed A Figma Clone a designing tool where users can collabrate and design live .User also can download it in form of PDF.  ",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "LiveBlocks","Framer","Canva"],
    imageUrl: wordanalyticsImg,
  },

  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
