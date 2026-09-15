import { Code2, Cpu, Database, Globe, Lightbulb, Terminal, User, FileCode2, Blocks, TestTube, SearchCheck, Workflow, Smartphone } from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Exploring", href: "#exploring" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = [
  {
    category: "Programming",
    icon: Code2,
    items: [
      { name: "Java", level: 65, description: "Learning core programming & OOP" },
      { name: "Python Basics", level: 50, description: "Scripting and basic logic" },
      { name: "MySQL", level: 40, description: "Basic database operations" },
      { name: "HTML & CSS", level: 75, description: "Building basic layouts" },
      { name: "Problem Solving", level: 60, description: "Logical thinking & algorithms" },
    ],
  },
  {
    category: "Development Tools",
    icon: Terminal,
    items: [
      { name: "VS Code", level: 80, description: "Primary code editor" },
      { name: "Git & GitHub", level: 60, description: "Basic version control" },
      { name: "AntiGravity IDE", level: 70, description: "AI coding environment" },
      { name: "Apache NetBeans", level: 65, description: "Java application development" },
      { name: "Postman", level: 40, description: "Exploring API requests" },
    ],
  },
  {
    category: "AI Tools (Exploring)",
    icon: Cpu,
    items: [
      { name: "ChatGPT", level: 85, description: "Learning companion" },
      { name: "Claude", level: 80, description: "Code review and concepts" },
      { name: "Gemini", level: 75, description: "Information synthesis" },
      { name: "GitHub Copilot", level: 70, description: "AI assisted coding" },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Snake Game Using Python Basics",
    description: "A simple Snake Game created while learning Python fundamentals and basic programming logic.",
    technology: "Python",
    badge: "Beginner Project",
    github: "#",
    live: null,
  },
  {
    title: "Library Management System with Login",
    description: "A beginner-level library management project exploring login functionality, CRUD operations, and basic application logic.",
    technology: "Python Basics",
    badge: "Student Project",
    github: "#",
    live: null,
  },
  {
    title: "NotePad App",
    description: "A simple desktop NotePad application created while learning Java programming and GUI/application development concepts.",
    technology: "Java",
    badge: "Beginner Project",
    github: "#",
    live: null,
  },
  {
    title: "Calculator App",
    description: "A beginner Java project demonstrating basic calculations, user interaction, and programming fundamentals.",
    technology: "Java",
    badge: "Beginner Project",
    github: "#",
    live: null,
  },
];

export const EXPLORING_AREAS = [
  {
    title: "Automation & Scripting",
    icon: Workflow,
    description: "Exploring how to write scripts to automate simple and repetitive daily tasks.",
  },
  {
    title: "QA & Software Testing",
    icon: TestTube,
    description: "Learning the fundamentals of ensuring software works as expected and identifying bugs.",
  },
  {
    title: "API Testing Basics",
    icon: Blocks,
    description: "Understanding how different software applications communicate with each other over the web.",
  },
  {
    title: "Website Testing",
    icon: Globe,
    description: "Exploring how to manually test websites across different devices for functionality and design.",
  },
  {
    title: "Performance Testing Concepts",
    icon: Smartphone,
    description: "Learning the basics of what makes applications fast or slow and how to measure it.",
  },
  {
    title: "AI Automation",
    icon: Cpu,
    description: "Exploring how AI tools and basic automation can simplify repetitive tasks and improve productivity.",
  },
];
