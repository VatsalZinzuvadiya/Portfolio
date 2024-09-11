import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import datingAppImg from "@/public/image.png";
import rmtdevImg from "@/public/crypto_tracker.png";
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
    title: "Graduated From Government Engineering College Modasa",
    location: "Modasa, India",
    description:
      "Earned a Bachelor's degree in Computer Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Freelance Full Stack Developer",
    location: "US-Remote",
    description:
      "Began my career during the COVID-19 pandemic, working as a freelance web developer at Dev Engineering.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
  {
    title: "Software Developer | Cognisun",
    location: "Ahmedabad, India",
    description:
      "Designed and implemented RESTful APIs for a government project, migrated Backbone.js to React, and integrated Redis and Bull Queue for enhanced queue management.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2023 – September 2023",
  },
  {
    title: "Software Engineer | X-Byte Enterprise Solutions",
    location: "Ahmedabad, India",
    description:
      "Developed and optimized microservices and serverless applications. Automated processes, integrated Docker, and worked with AWS services including CloudWatch and Rekognition. Led technical discussions and mentored team members.",
    icon: React.createElement(FaReact),
    date: "October 2022 – Present",
  },
] as const;

export const projectsData = [
  {
    title: "Dating App",
    description: "Created a scalable dating app using Node.js and AWS, featuring S3 for media, Firebase for real-time chat, OpenSearch for advanced search, and Redis for caching.",
    tags: ["Node.js", "AWS", "DynamoDB", "Firebase", "S3", "OpenSearch", "Redis", "Bull Queue"],
    imageUrl: datingAppImg, // Replace with actual image URL if available
  },
    {
    title: "Crypto Tracker",
    description:
      "Created a cryptocurrency tracker with a listing page for all coins and a details page displaying current prices and market capitalization in either rupees or USD.",
    tags: ["React", "TypeScript", "Tailwind", "Redux", "Axios"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Node", "MYSQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;
export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Golang",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Redis",
  "GraphQL",
  "Express",
  "Serverless Architecture",
  "Docker",
  "AWS",
  "Kafka",
  "REST APIs",
  "Socket.io",
  "CI/CD",
  "Automated Testing",
  "Performance Optimization",
  "Tailwind CSS",
  "Prisma",
  "MongoDB",
  "MySQL",
] as const;
