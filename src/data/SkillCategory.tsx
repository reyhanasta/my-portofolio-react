import {
  SiLaravel,
  SiVuedotjs,
  SiReact,
  SiMysql,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiChartdotjs,
  SiMikrotik,
} from "react-icons/si";
import {
  FaServer,
  FaNetworkWired,
  FaPalette,
  FaGithub,
  FaLaptopMedical,
} from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    skills: [
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Vue.js", icon: <SiVuedotjs className="text-[#42B883]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#06B6D4]" />,
      },
      { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
      { name: "Chart.js", icon: <SiChartdotjs className="text-[#FF6384]" /> },
    ],
  },
  {
    category: "Backend Development",
    color: "from-red-500/20 to-orange-500/20 border-red-500/30",
    skills: [
      { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      {
        name: "Server Admin",
        icon: <FaServer className="text-slate-400" />,
      },
    ],
  },
  {
    category: "Others",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    skills: [
      {
        name: "SIMRS (Khanza)",
        icon: <FaLaptopMedical className="text-[#ff0404]" />,
      },
      {
        name: "Git Version Control",
        icon: <FaGitAlt className="text-[#f15912]" />,
      },
      {
        name: "Github",
        icon: <FaGithub className="text-[#fdfdfd]" />,
      },
      {
        name: "Networking",
        icon: <FaNetworkWired className="text-green-400" />,
      },
      { name: "Mikrotik", icon: <SiMikrotik className="text-blue-400" /> },
      {
        name: "Content Creation",
        icon: <FaPalette className="text-pink-400" />,
      },
    ],
  },
];

export default skillCategories;
