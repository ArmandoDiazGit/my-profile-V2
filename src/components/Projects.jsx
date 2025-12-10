import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../libs/Card";
import { Button } from "../libs/Button";
import { Badge } from "../libs/Badge";
import { projects } from "../libs/Data";

function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work, from enterprise dashboards to
              interactive web applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-slate-800/50 border-2 border-slate-700 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col backdrop-blur-sm group"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 text-xs backdrop-blur-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-2 border-slate-600 hover:border-cyan-500 hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400"
                    onClick={() => window.open(project.codeUrl, "_blank")}
                  >
                    <Github className="mr-2" size={16} />
                    Code
                  </Button>

                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
