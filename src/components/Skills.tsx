import skillCategories from "@/data/SkillCategory";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 fade-in">
          Skill & Expertise
        </h2>
        {/* Skills Section */}
        <div className="fade-in-delay-2">
          <div className="space-y-8">
            {skillCategories.map((category) => (
              <div key={category.category} className="fade-in-delay-3">
                <h4 className="text-xl font-semibold mb-4 text-primary">
                  {category.category}
                </h4>
                <div
                  className={`p-6 rounded-xl border bg-linear-to-br ${category.color}`}
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border hover:border-primary hover:bg-background/80 transition-all hover:-translate-y-1 group"
                      >
                        <span className="text-3xl group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </span>
                        <span className="font-medium text-sm">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
