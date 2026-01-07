interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  tags: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  challenges?: string;
  metrics?: { label: string; value: string }[];
  active?: boolean;
}

const projects: Project[] = [
  {
    slug: "micro-banking-system",
    title: "Micro Banking System",
    description:
      "Micro banking management system with banking standards, equipped with savings and loans and accounting modules.",
    fullDescription:
      "A cooperative management system built specifically for my parents who manage a BTM cooperative. This application adopts banking standards in savings and loans management, with fully integrated accounting modules. The system helps manage member data, daily transactions, automatic interest calculations, and generates accurate real-time financial reports.",
    image: "/projects/koperasi/thumbnail.png",
    images: [
      "/projects/koperasi/thumbnail.png",
      "/projects/koperasi/dashboard.png",
      "/projects/koperasi/nasabah.png",
      "/projects/koperasi/nasabah-detail.png",
      "/projects/koperasi/pembiayaan.png",
      "/projects/koperasi/detail-pembiayaan.png",
      "/projects/koperasi/jurnal-umum.png",
      "/projects/koperasi/neraca.png",
      "/projects/koperasi/tutup-kas.png",
    ],
    tags: ["Laravel", "MySQL", "Tailwind CSS"],
    features: [
      "Member and savings data management",
      "Savings and loans module with automatic interest calculations",
      "Integrated double-entry accounting system",
      "Real-time financial reports (balance sheet, profit/loss, cash flow)",
      "Monitoring dashboard with interactive charts",
      "Multi-user with role management",
    ],
    challenges:
      "The biggest challenge was understanding banking accounting standards and implementing them correctly in a double-entry system. The solution was intensive consultation with accountants and regular testing with real data.",
    active: true,
  },
  {
    slug: "auto-report",
    title: "AutoReport (SIMRS Khanza Integration)",
    description:
      "Automated reporting application integrated with SIMRS Khanza, generating outpatient reports in Excel format according to clinic needs.",
    fullDescription:
      "An automated reporting system for outpatient care that is directly integrated with the SIMRS Khanza database. This application replaces the manual report creation process that takes 2-3 hours into just a few clicks. Patient data, diagnoses, actions, and payments are automatically extracted and formatted according to health department reporting standards.",
    image: "/projects/auto-report/thumbnail.png",
    images: [
      "/projects/auto-report/thumbnail.png",
      "/projects/auto-report/dashboard.png",
      "/projects/auto-report/export.jpeg",
    ],
    tags: ["Laravel", "MySQL", "Chart.js", "Tailwind CSS"],
    features: [
      "Direct integration with SIMRS Khanza database",
      "Export reports to Excel with custom format",
      "Filter data by date, clinic, doctor, and payment type",
      "Data visualization with interactive charts",
      "Visit and diagnosis statistics reports",
      "Report history tracking",
    ],
    githubUrl: "https://github.com/reyhanasta/kubr-report.git",
    challenges:
      "Complex SIMRS Khanza database structure with many table relationships. Solution: detailed database mapping and query optimization with indexing and eager loading for maximum performance.",
    metrics: [
      { label: "Time Saved", value: "2-3 hours → 5 minutes" },
      { label: "Query Time", value: "< 2 seconds" },
    ],
    active: false,
  },
  {
    slug: "fast-claim",
    title: "Fast Claim (BPJS Claim Organizer)",
    description:
      "Automation tool to organize folder structure and merge BPJS Health claim files according to SOP standards.",
    fullDescription:
      "A web automation application that organizes BPJS Health claim files according to SOP structure. This tool automatically creates folders based on SEP numbers, moves files to the correct folders, and merges multiple PDFs into one file according to BPJS requirements. What used to take 1-2 hours for 50 claims, can now be completed in 15-20 minutes.",
    image: "/projects/fast-claim/thumbnail.png",
    images: [
      "/projects/fast-claim/thumbnail.png",
      "/projects/fast-claim/login-page.png",
      "/projects/fast-claim/dashboard.png",
      "/projects/fast-claim/input-page.png",
      "/projects/fast-claim/form-1.png",
      "/projects/fast-claim/form-2.png",
      "/projects/fast-claim/folder-page.png",
      "/projects/fast-claim/backup-dashboard.png",
      "/projects/fast-claim/backup-folder.png",
      "/projects/fast-claim/storage-settings.png",
    ],
    tags: ["Laravel", "MySQL", "Tailwind CSS"],
    features: [
      "Auto-generate folder structure according to BPJS SOP",
      "Drag & drop file management",
      "PDF merger for claim document combination",
      "Automatic file completeness validation",
      "Bulk processing for multiple claims at once",
      "Log history for claim process tracking",
    ],
    challenges:
      "Handling efficient PDF merging on the server-side without heavy memory usage. Solution: implementation of queue system for batch processing and chunking large files.",
    metrics: [
      { label: "Efficiency", value: "3x faster" },
      { label: "Process 50 Claims", value: "1-2 hours → 15 minutes" },
    ],
    demoUrl: "https://youtu.be/4zJCxvivMr4?si=-Gm5S-9fpgdkWPL4",
    active: true,
  },
  {
    slug: "shift-scheduler",
    title: "Shift Scheduler",
    description:
      "Shift scheduling application for medical records staff with interactive calendar, notifications, and mobile-responsive shift swap features.",
    fullDescription:
      "A shift scheduling platform that facilitates coordination of medical records staff at clinics. This application provides an interactive calendar to view schedules, automatic notification system before shifts start, and swap shift feature that allows staff to exchange schedules with approval workflow. Built mobile-first for easy access from smartphones.",
    image: "/projects/shift-scheduler.png",
    images: [
      "/projects/shift-scheduler.png",
      "/projects/shift-scheduler/calendar.png",
      "/projects/shift-scheduler/swap.png",
      "/projects/shift-scheduler/notification.png",
      "/projects/shift-scheduler/mobile.png",
    ],
    tags: ["Vue", "Node.js", "Express", "JavaScript", "Tailwind CSS", "MySQL"],
    features: [
      "Interactive calendar with drag & drop",
      "Push notifications before shift starts",
      "Swap shift system with approval workflow",
      "Filter view per user or period",
      "Mobile-responsive design",
      "Export schedule to PDF/Excel",
    ],
    demoUrl: "https://shift.astareyhan.my.id/",
    challenges:
      "Reliable real-time notifications without heavy WebSocket infrastructure. Solution: using Firebase Cloud Messaging (FCM) for efficient push notifications.",
    metrics: [
      { label: "Mobile Usage", value: "85%" },
      { label: "Response Time", value: "< 1 second" },
    ],
    active: false,
  },
];

export default projects;
