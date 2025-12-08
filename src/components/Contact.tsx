import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-20   overflow-hidden bg-linear-to-t from-primary/7 via-transparent to-transparent"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 fade-in">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground mb-12 fade-in-delay-1">
          Saya selalu terbuka untuk project baru, kolaborasi, atau sekadar
          diskusi tentang teknologi. Feel free to reach out!
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 fade-in-delay-2">
          <a
            href="mailto:astsareyhan@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>
          <a
            href="https://github.com/reyhanasta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary transition-colors"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/reyhanasta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>

        {/* Download CV Button */}
        <div className="fade-in-delay-3">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors font-medium"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border ">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Reyhan. Built with React & Tailwind
            CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
