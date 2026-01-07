import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import projects from "../data/ProjectList";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-linear-to-b from-transparent via-primary/5 to-transparent"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-10 fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            My Projects
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-4">
            Berisikan beberapa proyek yang pernah saya kerjakan baik secara
            profesional ataupun personal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {projects.map(
            (project, index) =>
              project.active && (
                <Card
                  key={index}
                  className="overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/10 transition-transform duration-300 group fade-in-delay-1 hover:-translate-y-2"
                >
                  <div className="w-full h-40 relative overflow-hidden aspect-video bg-linear-to-br from-primary/20 to-emerald-500/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 md:line-clamp-3 text-sm text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="bg-primary/10 hover:bg-primary/20 transition-colors text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pt-1 ">
                      <Link to={`/projects/${project.slug}`} className="w-full">
                        <Button
                          size="icon-sm"
                          variant="default"
                          className="w-full bg-primary hover:bg-primary/90 min-h-10 col-span-2"
                        >
                          <ArrowRight className="w-4 h-4 " />
                          Detail
                        </Button>
                      </Link>
                      {project.githubUrl && (
                        <Button
                          size="icon-sm"
                          variant="secondary"
                          className="w-full hover:bg-accent min-h-10"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button
                          size="sm"
                          variant="link"
                          className="w-full hover:bg-accent min-h-10"
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
