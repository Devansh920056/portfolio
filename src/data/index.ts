import { Code2, Database, Layout, Server, Terminal, Wrench } from "lucide-react";

export const siteConfig = {
  name: "Devansh Zode",
  role: "Full Stack Developer | AIML Student",
  tagline: "Passionate about building scalable web applications, solving real-world problems, and continuously learning modern technologies.",
  email: "devanshzode2005@gmail.com",
  links: {
    github: "https://github.com/Devansh920056",
    linkedin: "https://www.linkedin.com/in/devanshzode",
    leetcode: "https://leetcode.com/u/Devansh2005/",
  },
  stats: [
    { label: "", value: "Open to Internships" },
    { label: "", value: "Full Stack Development" },
    { label: "", value: "AIML Engineering" },
  ]
};

export const aboutMe = {
  degree: "B.E. in Artificial Intelligence & Machine Learning",
  graduation: "June 2027",
  cgpa: "7.80/10",
  description: [
    "As a final-year Artificial Intelligence & Machine Learning student, I combine my academic foundation in data with practical full-stack development skills.",
    "I enjoy building web applications using Next.js and the MERN stack, taking features from database design to responsive frontend implementation.",
    "I am constantly expanding my technical toolkit and am actively seeking software engineering internships where I can contribute to real-world projects and learn from experienced teams."
  ]
};

export const whatIBringData = [
  {
    title: "Problem Solver",
    description: "I enjoy breaking down complex problems and building practical, optimized solutions from the ground up."
  },
  {
    title: "Continuous Learner",
    description: "Constantly exploring modern technologies, architectural patterns, and industry best practices."
  },
  {
    title: "Team-Oriented",
    description: "Comfortable collaborating, learning from constructive feedback, and contributing effectively to a team."
  }
];

export const skillsData = [
  {
    category: "Languages",
    icon: Terminal,
    skills: [
      { name: "Java", learning: false },
      { name: "Python", learning: false },
      { name: "JavaScript", learning: false },
      { name: "SQL", learning: false },
    ]
  },
  {
    category: "Frontend",
    icon: Layout,
    skills: [
      { name: "HTML5", learning: false },
      { name: "CSS3", learning: false },
      { name: "JavaScript", learning: false },
      { name: "Tailwind CSS", learning: false },
      { name: "React", learning: true },
      { name: "Next.js", learning: true },
    ]
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", learning: true },
      { name: "Express.js", learning: true },
    ]
  },
  {
    category: "Databases",
    icon: Database,
    skills: [
      { name: "SQL", learning: false },
      { name: "PostgreSQL", learning: false },
    ]
  },
  {
    category: "Tools & Technologies",
    icon: Wrench,
    skills: [
      { name: "Git", learning: false },
      { name: "GitHub", learning: false },
      { name: "VS Code", learning: false },
      { name: "Prisma", learning: false },
      { name: "Postman", learning: false },
    ]
  },
  {
    category: "Concepts",
    icon: Code2,
    skills: [
      { name: "Data Structures & Algorithms", learning: false },
      { name: "Object-Oriented Programming", learning: false },
      { name: "REST APIs", learning: false },
      { name: "Responsive Web Design", learning: false },
    ]
  }
];

export const projectsData = [
  {
    id: "synchro",
    title: "Synchro",
    description: "A real-time multiplayer web application featuring live interactions, matchmaking, authentication, and persistent user statistics.",
    problemSolved: "I built Synchro to explore real-time data synchronization across distributed clients. The primary challenge was managing WebSocket connection stability and ensuring state consistency with minimal latency.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "Socket.IO", "PostgreSQL", "Prisma"],
    features: [
      "Real-time multiplayer communication using WebSockets",
      "OAuth authentication and robust session management",
      "Persistent match history and user statistics",
      "Monorepo architecture using pnpm workspaces"
    ],
    architecture: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Node.js", "Express", "Socket.IO"],
      database: ["PostgreSQL", "Prisma"],
      infrastructure: ["Vercel", "Railway"]
    },
    challenges: [
      "Handling WebSocket reconnects and preventing memory leaks in active game rooms.",
      "Ensuring type safety across monorepo packages for shared event payloads."
    ],
    learnings: [
      "Gained practical experience managing WebSocket lifecycles in Node.js.",
      "Learned how to structure and optimize Prisma queries for relational player data.",
      "Improved understanding of event-driven architecture and race conditions."
    ],
    status: "In Development",
    metadata: ["Real-Time", "Full Stack", "WebSockets", "Authentication"],
    githubUrl: "https://github.com/Devansh920056/synchro.git",
    liveUrl: "",
    image: "/projects/synchro-placeholder.jpg"
  }
];

export const currentFocusData = [
  {
    id: 1,
    title: "Full Stack Development",
    description: "Building scalable web apps with the MERN stack and Next.js.",
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    description: "Strengthening core computer science fundamentals in Java.",
  },
  {
    id: 3,
    title: "Machine Learning Fundamentals",
    description: "Exploring basic ML algorithms and data preprocessing.",
  }
];

export const certificationsData = [
  {
    id: 1,
    name: "Full Stack Web Development (Delta)",
    issuer: "Apna College",
    date: "June 2026",
    status: "completed",
    link: "/certificates/full-stack-delta.pdf",
  },
  {
    id: 2,
    name: "Artificial Intelligence and Machine Learning Course",
    issuer: "Apna College",
    date: "Current",
    status: "in-progress",
    link: "#",
  }
];
