export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
    >
      <div className="max-w-4xl mx-auto text-center fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-primary via-teal-500 to-emerald-500 bg-clip-text text-transparent">
          Reyhan Asta
        </h1>
        <p className="text-xl md:text-2xl text-foreground font-semibold mb-4">
          Software Engineer
        </p>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Software engineer dengan 4+ tahun pengalaman mengelola SIMRS,
          infrastruktur IT, dan pengembangan aplikasi. Passionate tentang
          optimization dan problem solving.
        </p>
      </div>
    </section>
  );
}
