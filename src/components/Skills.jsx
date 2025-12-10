import { Badge } from "../libs/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "../libs/Card";
import { Code, Layers, Wrench } from "lucide-react";
import { skills } from "../libs/Data";

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      items: skills.languages,
      color: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      items: skills.frameworks,
      color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      items: skills.tools,
      color: "bg-teal-500/10 text-teal-400 border-teal-500/30",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies I use to build
              exceptional web applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-2 border-slate-700 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-linear-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-lg border border-cyan-500/30">
                        <Icon size={24} />
                      </div>
                      <CardTitle className="text-xl text-white">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className={`${category.color} px-3 py-1.5 text-sm font-medium border-2 hover:scale-105 transition-transform cursor-default backdrop-blur-sm`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
