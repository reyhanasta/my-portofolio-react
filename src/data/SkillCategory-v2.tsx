interface SkillCategory {
  category: string;
  skills: Array<string>;
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    skills: ["React", "Vue.js", "Tailwind Css", "Boostrap"],
  },
  {
    category: "Backend Development",
    color: "from-red-500/20 to-orange-500/20 border-red-500/30",
    skills: ["Laravel", "MySQL", "PHP", "Node.Js"],
  },
  {
    category: "Others",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    skills: ["SIMRS Khanza", "Git", "Docker", "Mikrotik"],
  },
];

export default skillCategories;
