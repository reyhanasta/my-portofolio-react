import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projects from "../data/ProjectList";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-linear-to-b from-transparent via-primary/5 to-transparent"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Portfolio project yang telah saya kerjakan dengan berbagai teknologi
            dan solusi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map(
            (project, index) =>
              project.active && (
                <Card
                  key={index}
                  className="overflow-hidden border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group fade-in-delay-1 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden aspect-video bg-linear-to-br from-primary/20 to-emerald-500/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="bg-primary/10 hover:bg-primary/20 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.demoUrl && (
                        <Button
                          size="sm"
                          variant="default"
                          className="flex-1 bg-primary hover:bg-primary/90"
                          asChild
                        >
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 hover:bg-accent"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
