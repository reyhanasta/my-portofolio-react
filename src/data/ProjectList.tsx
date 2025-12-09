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
    slug: "koperasi-management-system",
    title: "Koperasi Management System",
    description:
      "Sistem manajemen koperasi dengan standar perbankan, dilengkapi modul simpan pinjam dan akuntansi terintegrasi untuk efisiensi operasional BTM.",
    fullDescription:
      "Sistem manajemen koperasi yang dibangun khusus untuk orang tua saya yang mengelola koperasi BTM . Aplikasi ini mengadopsi standar perbankan dalam pengelolaan simpan pinjam, dengan modul akuntansi yang terintegrasi penuh. Sistem ini membantu mengelola data anggota, transaksi harian, perhitungan bunga otomatis, dan menghasilkan laporan keuangan yang akurat dan real-time.",
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
    tags: ["Laravel", "MySQL", "Tailwind CSS", "PHP"],
    features: [
      "Manajemen data anggota dan simpanan",
      "Modul simpan pinjam dengan perhitungan bunga otomatis",
      "Sistem akuntansi double-entry terintegrasi",
      "Laporan keuangan real-time (neraca, laba rugi, arus kas)",
      "Dashboard monitoring dengan grafik interaktif",
      "Multi-user dengan role management",
    ],
    challenges:
      "Challenge terbesar adalah memahami standar akuntansi perbankan dan mengimplementasikannya dalam sistem double-entry yang benar. Solusinya adalah konsultasi intensif dengan akuntan dan testing berkala dengan data riil.",
    active: true,
  },
  {
    slug: "auto-report",
    title: "AutoReport (SIMRS Khanza Integration)",
    description:
      "Aplikasi reporting otomatis yang terintegrasi dengan SIMRS Khanza, menghasilkan laporan rawat jalan dalam format Excel sesuai kebutuhan klinik.",
    fullDescription:
      "Sistem pelaporan otomatis untuk rawat jalan yang terintegrasi langsung dengan database SIMRS Khanza. Aplikasi ini menggantikan proses manual pembuatan laporan yang memakan waktu 2-3 jam menjadi hanya beberapa klik. Data pasien, diagnosa, tindakan, dan pembayaran otomatis terekstrak dan diformat sesuai standar pelaporan dinas kesehatan.",
    image: "/projects/auto-report/thumbnail.png",
    images: [
      "/projects/auto-report/thumbnail.png",
      "/projects/auto-report/dashboard.png",
      "/projects/auto-report/export.jpeg",
    ],
    tags: ["Laravel", "MySQL", "Chart.js", "Tailwind CSS"],
    features: [
      "Integrasi langsung dengan database SIMRS Khanza",
      "Export laporan ke Excel dengan format custom",
      "Filter data berdasarkan tanggal, poli, dokter, dan jenis pembayaran",
      "Visualisasi data dengan chart interaktif",
      "Laporan statistik kunjungan dan diagnosa",
      "History laporan yang sudah dibuat",
    ],
    githubUrl: "https://github.com/reyhanasta/kubr-report.git",
    challenges:
      "Struktur database SIMRS Khanza yang kompleks dengan banyak relasi tabel. Solusi: mapping database secara detail dan optimasi query dengan indexing dan eager loading untuk performa maksimal.",
    metrics: [
      { label: "Penghematan Waktu", value: "2-3 jam → 5 menit" },
      { label: "Query Time", value: "< 2 detik" },
    ],
    active: false,
  },
  {
    slug: "fast-claim",
    title: "Fast Claim (BPJS Claim Organizer)",
    description:
      "Tool automation untuk menyusun struktur folder dan merge file klaim BPJS Kesehatan sesuai standar SOP, mempercepat proses klaim hingga 3x lipat.",
    fullDescription:
      "Aplikasi web automation yang mengorganisir file-file klaim BPJS Kesehatan sesuai struktur SOP. Tool ini otomatis membuat folder berdasarkan nomor SEP, memindahkan file ke folder yang tepat, dan merge multiple PDF menjadi satu file sesuai ketentuan BPJS. Yang tadinya memakan waktu 1-2 jam untuk 50 klaim, sekarang bisa diselesaikan dalam 15-20 menit.",
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
    tags: ["Laravel", "JavaScript", "MySQL", "Tailwind CSS"],
    features: [
      "Auto-generate struktur folder sesuai SOP BPJS",
      "Drag & drop file management",
      "PDF merger untuk menggabungkan dokumen klaim",
      "Validasi kelengkapan berkas otomatis",
      "Bulk processing untuk multiple klaim sekaligus",
      "Log history untuk tracking proses klaim",
    ],
    challenges:
      "Handling PDF merge di server-side yang efficient dan tidak membebani memori. Solusi: implementasi queue system untuk batch processing dan chunking file besar.",
    metrics: [
      { label: "Efisiensi", value: "3x lebih cepat" },
      { label: "Proses 50 Klaim", value: "1-2 jam → 15 menit" },
    ],
    active: true,
  },
  {
    slug: "shift-scheduler",
    title: "Shift Scheduler",
    description:
      "Aplikasi penjadwalan shift untuk petugas rekam medis dengan fitur kalender interaktif, notifikasi, dan swap shift yang mobile-responsive.",
    fullDescription:
      "Platform penjadwalan shift yang memudahkan koordinasi tim rekam medis klinik. Aplikasi ini menyediakan kalender interaktif untuk melihat jadwal, sistem notifikasi otomatis sebelum shift dimulai, dan fitur swap shift yang memungkinkan antar petugas bertukar jadwal dengan approval system. Dibangun mobile-first untuk akses mudah dari smartphone.",
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
      "Kalender interaktif dengan drag & drop",
      "Notifikasi push sebelum shift dimulai",
      "Sistem swap shift dengan approval workflow",
      "Filter view per user atau per periode",
      "Mobile-responsive design",
      "Export jadwal ke PDF/Excel",
    ],
    demoUrl: "https://shift.astareyhan.my.id/",
    challenges:
      "Real-time notification yang reliable tanpa WebSocket infrastructure yang berat. Solusi: menggunakan Firebase Cloud Messaging (FCM) untuk push notification yang efficient.",
    metrics: [
      { label: "Mobile Usage", value: "85%" },
      { label: "Response Time", value: "< 1 detik" },
    ],
    active: false,
  },
];

export default projects;
