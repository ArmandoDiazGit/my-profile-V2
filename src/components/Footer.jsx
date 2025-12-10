import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../libs/Data";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      url: personalInfo.github,
      label: "GitHub",
    },
    {
      icon: Linkedin,
      url: personalInfo.linkedin,
      label: "LinkedIn",
    },
    {
      icon: Mail,
      url: `mailto:${personalInfo.email}`,
      label: "Email",
    },
  ];

  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </h3>
              <p className="text-gray-400">
                {personalInfo.title} · {personalInfo.specialty}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h4>
              <div className="flex flex-col gap-2">
                {["Home", "About", "Skills", "Projects", "Contact"].map(
                  (link) => (
                    <button
                      key={link}
                      onClick={() => {
                        const element = document.getElementById(
                          link.toLowerCase()
                        );
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-left"
                    >
                      {link}
                    </button>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-800 hover:bg-linear-to-r hover:from-cyan-500 hover:to-blue-600 rounded-full flex items-center justify-center transition-all border border-slate-700 hover:border-transparent"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 my-8"></div>

          <div className="text-center text-gray-400">
            <p>
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="mt-2 text-sm">
              Front-End Developer · Angular · TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
