export interface Skill {
  name: string;
  icon?: string; // react-icons name, e.g. "SiReact" (optional)
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "C", icon: "SiC" },
      { name: "C++", icon: "SiCplusplus" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "SQL", icon: "SiMysql" },
      { name: "HTML", icon: "SiHtml5" },
      { name: "CSS", icon: "SiCss3" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express.js", icon: "SiExpress" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Mongoose", icon: "SiMongoose" },
      { name: "BetterAuth" },
    ],
  },
  {
    category: "Tools & Database",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "AI-Assisted Coding" },
      { name: "AI Mindset & Engineering" },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Team Leadership" },
      { name: "Public Speaking" },
      { name: "Event Management" },
      { name: "Content Creation" },
      { name: "Problem Solving" },
    ],
  },
];
