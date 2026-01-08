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
    slug: "invents",
    title: "Asset Management System (Invents)",
    description:
      "Modern web-based asset management system with comprehensive tracking, categorization, and maintenance features built with Laravel 12 and React 19.",
    fullDescription:
      "A sophisticated asset management system built with Laravel 12 and React 19, leveraging Inertia.js for a seamless single-page application experience. The system provides comprehensive asset tracking, categorization, location management, and maintenance records with a focus on usability and modern development practices. It features complete CRUD operations, smart asset code generation, location tracking, comprehensive maintenance records, and QR code integration for asset identification.",
    image: "/projects/invents/thumbnail.jpg",
    images: [
      "/projects/invents/asset_list.png",
      "/projects/invents/asset_detail.png",
      "/projects/invents/add_asset_form.png",
      "/projects/invents/add_location_modal.png",
    ],
    tags: [
      "Laravel",
      "React",
      "Inertia.js",
      "TypeScript",
      "MySQL",
      "Tailwind CSS",
      "Vite",
      "Lucide React",
    ],
    features: [
      "Complete asset CRUD operations with search and filtering",
      "Smart asset code generation with category-based prefixes",
      "Physical location tracking and management",
      "Comprehensive maintenance record tracking",
      "QR code generation for asset identification",
      "Real-time search and filtering",
      "Multi-level categorization system",
    ],
    challenges:
      "Building a modern architecture that bridges Laravel and React seamlessly using Inertia.js. Ensuring proper state management between backend and frontend while maintaining security and performance. The solution involved implementing a robust Eloquent relationship structure and optimizing queries for large datasets.",

    githubUrl: "https://github.com/reyhanasta/invents.git",
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
    title: "FastClaim (BPJS Claim Organizer)",
    description:
      "Modern web application designed to streamline and automate BPJS Health claim document processing with advanced PDF manipulation and smart document organization.",
    fullDescription:
      "FastClaim is a modern web application designed to streamline and automate the management of BPJS Health claim documents for advanced healthcare facilities. It automatically extracts key data from SEP PDFs using OCR, merges multiple documents into standardized files, and organizes them in structured directories. The system features real-time analytics, automated backup processing, role-based access control, and a modern UI built with Flux UI and Tailwind CSS 4.",
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
    tags: [
      "Laravel 12.x",
      "Livewire 3.x",
      "PHP 8.2+",
      "Flux UI",
      "Tailwind CSS 4",
      "Vite",
      "MySQL",
      "PDF Processing",
    ],
    features: [
      "Smart upload with automatic data extraction using OCR (Poppler Utils)",
      "One-click PDF merging for SEP, Medical Resume, Billing, Lab Results, and LIP documents",
      "Structured file organization by year, month/period, care type, and dates",
      "Automated backup processing using Laravel Queues",
      "Role-based access control (Admin: full control, Operator: claim processing)",
      "Real-time dashboard with claim statistics and monitoring",
      "Drag & drop file management interface",
      "Automatic file completeness validation",
      "Bulk processing for multiple claims simultaneously",
      "Comprehensive log history for claim process tracking",
    ],
    challenges:
      "Efficient PDF processing on server-side without heavy memory usage. Implemented queue system for batch processing and chunking large files. Integration with Poppler Utils for OCR text extraction while maintaining system responsiveness.",
    metrics: [
      { label: "Efficiency", value: "3x faster" },
      { label: "Process 50 Claims", value: "1-2 hours → 15 minutes" },
      { label: "Query Time", value: "< 1 second" },
    ],
    demoUrl: "https://youtu.be/4zJCxvivMr4?si=-Gm5S-9fpgdkWPL4",
    active: true,
  },
];

export default projects;
