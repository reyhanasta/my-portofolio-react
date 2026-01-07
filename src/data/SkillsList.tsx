import {
  SiLaravel,
  SiReact,
  SiMysql,
  SiTailwindcss,
  SiMikrotik,
} from "react-icons/si";
import { FaLaptopMedical, FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";

interface Skill {
  name: string;
  icon: React.ReactNode;
  url?: string;
}

const skills: Skill[] = [
  {
    name: "React",
    icon: <SiReact className="text-[#61DAFB]" />,
    url: "https://react.dev/",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
    url: "https://tailwindcss.com/",
  },
  {
    name: "Laravel",
    icon: <SiLaravel className="text-[#FF2D20]" />,
    url: "https://laravel.com/",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-[#4479A1]" />,
    url: "https://www.mysql.com/",
  },
  {
    name: "SIMRS (Khanza)",
    icon: <FaLaptopMedical className="text-[#ff0404]" />,
    url: "https://www.yaski.or.id/",
  },
  {
    name: "Git ",
    icon: <FaGitAlt className="text-[#f15912]" />,
    url: "https://git-scm.com/",
  },

  {
    name: "Docker",
    icon: <FaDocker className="text-[#0db7ed]" />,
    url: "https://www.docker.com/",
  },
  {
    name: "Mikrotik",
    icon: <SiMikrotik className="text-blue-400" />,
    url: "https://mikrotik.com/",
  },
];

export default skills;
