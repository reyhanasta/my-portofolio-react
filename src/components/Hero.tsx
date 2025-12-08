import { Button } from "@/components/ui/button";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-primary/10 via-transparent to-transparent"
    >
      <div className="container mx-auto px-4 z-10 text-center ">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Hello I'm Reyhan Asta, <br />
            <span className="text-primary block mt-2">Software Engineer</span>
          </h1>

          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful digital experiences through clean code and
            thoughtful design
          </p>

          <div className="flex gap-4 justify-center items-center pt-4">
            <Button size="lg" onClick={() => scrollToSection("projects")}>
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
