import { Card, CardContent } from "@/components/ui/card";
import features from "@/data/FeatureList";
const About = () => {
  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Halo! Saya Reyhan, seorang IT Professional dengan passion besar di
            bidang software development dan teknologi kesehatan. Selama 4 tahun
            terakhir, saya berkecimpung di dunia IT Kesehatan, membangun dan
            mengelola sistem informasi yang mendukung pelayanan medis yang lebih
            baik. Perjalanan saya dimulai dari ketertarikan mendalam pada
            programming, yang kemudian berkembang menjadi karir yang memadukan
            teknologi dengan impact sosial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
