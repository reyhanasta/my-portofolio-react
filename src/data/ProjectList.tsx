interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  active?: boolean;
}

const projects: Project[] = [
  {
    title: "Koperasi System",
    description:
      "Sistem manajemen koperasi dengan standar perbankan, dilengkapi modul simpan pinjam dan akuntansi terintegrasi untuk efisiensi operasional BTM.",
    image: "/projects/koperasi.png",
    tags: ["Laravel", "MySQL", "Tailwind CSS", "PHP"],

    active: true,
  },
  {
    title: "RAJAL Reporting System",
    description:
      "Aplikasi reporting otomatis yang terintegrasi dengan SIMRS Khanza, menghasilkan laporan rawat jalan dalam format Excel sesuai kebutuhan klinik.",
    image: "/projects/laporan-kubr.png",
    tags: ["Laravel", "MySQL", "Chart.js", "Tailwind CSS"],

    githubUrl: "https://github.com/reyhanasta/kubr-report.git",
    active: true,
  },
  {
    title: "Fast Claim (BPJS Claim Organizer)",
    description:
      "Tool automation untuk menyusun struktur folder dan merge file klaim BPJS Kesehatan sesuai standar SOP, mempercepat proses klaim hingga 3x lipat.",
    image: "/projects/fast-claim.png",
    tags: ["Laravel", "JavaScript", "MySQL", "Tailwind CSS"],

    active: true,
  },
  {
    title: "Shift Scheduler",
    description:
      "Aplikasi penjadwalan shift untuk petugas rekam medis dengan fitur kalender interaktif, notifikasi, dan swap shift yang mobile-responsive.",
    image: "/projects/shift-scheduler.png",
    tags: ["Vue", "Node.js", "Express", "JavaScript", "Tailwind CSS", "MySQL"],
    demoUrl: "https://shift.astareyhan.my.id/",
    active: true,
  },
];

export default projects;
