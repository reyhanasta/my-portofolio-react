import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import projects from "@/data/ProjectList";
import ImageGallery from "./ImageGallery";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  // Redirect to home if project not found
  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen pt-16 md:pt-20 pb-12 md:pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <button
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
              }
            }, 100);
          }}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 md:mb-8 min-h-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm md:text-base">Kembali ke Projects</span>
        </button>

        {/* Hero Section */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            {project.title}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-4 md:mb-6">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs md:text-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {project.demoUrl && (
              <Button asChild className="w-full sm:w-auto">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-11"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Lihat Demo</span>
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-11"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>Lihat Source</span>
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-8 md:mb-12">
          <ImageGallery images={project.images} title={project.title} />
        </div>

        {/* Full Description */}
        <Card className="mb-6 md:mb-8">
          <CardContent className="pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
              Tentang Project
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </p>
          </CardContent>
        </Card>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <Card className="mb-6 md:mb-8">
            <CardContent className="pt-6">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                Fitur Utama
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Challenges & Solutions */}
        {project.challenges && (
          <Card className="mb-6 md:mb-8">
            <CardContent className="pt-6">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                Challenges & Solutions
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {project.challenges}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Performance Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <Card className="mb-6 md:mb-8">
            <CardContent className="pt-6">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                Performance Metrics
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {project.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-accent/90 rounded-2xl p-4 md:p-6 text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Tech Stack Detail */}
        <Card className="mb-6 md:mb-8">
          <CardContent className="pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="default"
                  className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bottom CTA */}
        <div className="flex justify-center pt-6 md:pt-8 px-4">
          <button
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              className="inline-flex items-center justify-center gap-2 min-h-11 w-full"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm md:text-base">Kembali ke Projects</span>
            </Button>
          </button>
        </div>
      </div>
    </div>
  );
}
