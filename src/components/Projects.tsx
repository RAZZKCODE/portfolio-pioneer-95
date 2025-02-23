
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and TypeScript",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Project Two",
    description: "Full-stack application with real-time features",
    tech: ["Next.js", "Prisma", "tRPC"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Project Three",
    description: "Mobile-first e-commerce platform",
    tech: ["React Native", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest mb-2">Portfolio</h2>
        <h3 className="text-3xl font-bold mb-12">Featured Projects</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="glass overflow-hidden group transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
