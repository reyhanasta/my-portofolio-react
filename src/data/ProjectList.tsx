interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Koperasi System",
    description:
      "Sistem koperasi untuk orang tua, mencakup manajemen simpan pinjam dan laporan keuangan lengkap dengan dashboard monitoring.",
    image: "/projects/koperasi-system.jpg",
    tags: ["Laravel", "MySQL", "Bootstrap", "PHP"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "RAJAL Reporting System",
    description:
      "Sistem laporan rawat jalan untuk klinik tempat bekerja dengan fitur filtering, export, dan visualisasi data pasien.",
    image: "/projects/outpatient-report.jpg",
    tags: ["Laravel", "MySQL", "Chart.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Fast Claim (BPJS Claim Organizer)",
    description:
      "Aplikasi web untuk mengatur dan mengelola dokumen klaim BPJS secara efisien dengan sistem tracking dan reminder otomatis.",
    image: "/projects/fast-claim.png",
    tags: ["Laravel", "JavaScript", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Shift Scheduler",
    description:
      "Aplikasi penjadwalan shift karyawan dengan fitur notifikasi dan manajemen cuti terintegrasi.",
    image: "/projects/shift-scheduler.png",
    tags: ["Vue", "Node.js", "Express", "JavaScript", "Tailwind CSS", "MySQL"],
    demoUrl: "https://shift.astareyhan.my.id/",
    githubUrl: "#",
  },
];
export default projects;
