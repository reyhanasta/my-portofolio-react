import skills from "@/data/SkillsList";
import { Card, CardContent } from "./ui/card";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in">
          Skill & Expertise
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="group md:hover:shadow-2xl md:hover:shadow-primary/40 transition-all duration-300 md:hover:-translate-y-1 border-slate-300 bg-white/15 "
            >
              <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                <div className="text-6xl mb-4 transition-transform duration-300 md:group-hover:scale-110 md:group-hover:rotate-3">
                  {skill.icon}
                </div>
                <span className="font-medium text-foreground text-center">
                  {skill.name}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
