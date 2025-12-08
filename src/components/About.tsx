import { Palette, Zap, Stethoscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Stethoscope,
      title: "Healthcare IT Builder",
      description:
        "2+ years menjaga SIMRS, jaringan, dan server klinik tetap stabil dan siap pakai.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Terobsesi pada waktu muat cepat, optimasi, dan efisiensi setiap request.",
    },
    {
      icon: Palette,
      title: "Product-Minded Engineer",
      description:
        "Menggabungkan coding dan konten visual agar pengalaman terasa jelas, praktis, dan menarik.",
    },
  ];

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Saya Reyhan, software engineer dengan fokus healthcare IT dan
            optimasi. Selama 4+ tahun di klinik saya mengelola SIMRS, jaringan,
            dan server agar operasional tetap lancar. Saya membangun aplikasi
            modern (Laravel, Vue, React), mengutamakan performa, dan menikmati
            menyeimbangkan sistem seperti game balance maupun web performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="pt-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/80">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
