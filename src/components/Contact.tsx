import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-20   overflow-hidden bg-linear-to-t from-primary/7 via-transparent to-transparent"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 fade-in">
          Get In Touch
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-12 fade-in-delay-1 px-4">
          I am always open for new projects, collaboration, or just
          technology discussions. Feel free to reach out!
        </p>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 md:mb-12 fade-in-delay-2 px-4">
          <a
            href="mailto:astsareyhan@gmail.com"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors min-h-11 w-full sm:w-auto"
          >
            <Mail className="w-5 h-5" />
            <span>Email Me</span>
          </a>
          <a
            href="https://github.com/reyhanasta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary transition-colors min-h-11 w-full sm:w-auto"
          >
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/reyhanasta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary transition-colors min-h-11 w-full sm:w-auto"
          >
            <FaLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Download CV Button */}
        <div className="fade-in-delay-3 px-4">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors font-medium min-h-11 w-full sm:w-auto"
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-border px-4">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Reyhan. Built with React & Tailwind
            CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
