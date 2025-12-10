import { Code2, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "../libs/Card";
import { bio } from "../libs/Data";

function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code with best practices and modern patterns.",
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description:
        "Creating intuitive interfaces that users love with attention to design details.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Building fast, responsive applications optimized for the best user experience.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-12">
            {bio.full.map((paragraph, index) => (
              <p key={index} className="text-gray-400">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-2 border-slate-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 backdrop-blur-sm"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-full mb-4 border border-cyan-500/30">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
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

export default About;
