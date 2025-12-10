export const personalInfo = {
  name: "Armando Diaz",
  title: "Front-End Software Engineer",
  specialty: "Angular Specialist",
  tagline:
    "I build scalable, user-friendly interfaces with Angular, TypeScript, and modern web technologies.",
  email: "amandomcmlxxxix@gmail.com",
  github: "https://github.com/ArmandoDiazGit",
  linkedin: "https://www.linkedin.com/in/armando-diaz-750041204/",
  resumeUrl: "https://drive.google.com/file/d/10aHayfLDi__d53nQ8UC7FQFCJNfmMpUC/view?usp=drive_link",
};

export const bio = {
  short:
    "Front-End Software Engineer with 3+ years of experience specializing in Angular. I enjoy building scalable, responsive, and user-friendly web applications that solve real problems and create smooth digital experiences.",
  full: [
    "Hi, I'm Armando Diaz — a Front-End Software Engineer with 3+ years of experience specializing in Angular. I enjoy building scalable, responsive, and user-friendly web applications that solve real problems and create smooth digital experiences.",
    "My main expertise is in Angular, TypeScript, and Angular Material, but I also work with modern web technologies like RxJS, NgRx, REST APIs, HTML5, and CSS3. Over the years, I've developed everything from enterprise dashboards to interactive tools, always focusing on clean code and great design.",
    "Beyond coding, I'm passionate about UI/UX, making sure the products I build aren't just functional but also intuitive and enjoyable to use. I believe that great front-end engineering is about combining logic with design — turning complex requirements into simple, elegant solutions.",
    "When I'm not coding, I'm usually learning new frameworks, exploring modern front-end practices, or experimenting with side projects that push my skills further.",
  ],
};

export const skills = {
  languages: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  frameworks: ["Angular", "React", "Angular Material", "RxJS", "NgRx"],
  tools: ["Git", "Figma", "VS Code", "npm", "REST APIs"],
};

export const projects = [
  {
    id: 1,
    title: "Appointment App",
    description:
      "Scheduling interface with responsive UI and reusable form components. Features real-time availability checking and calendar integration.",
    tech: ["Angular", "TypeScript", "Angular Material", "REST APIs"],
    codeUrl: "https://github.com/ArmandoDiazGit/angular-appointment-app",
    liveUrl: null,
  },
  {
    id: 2,
    title: "React Pizza App",
    description:
      "Interactive pizza ordering application with dynamic menu, cart management, and order tracking functionality.",
    tech: ["React", "JavaScript", "CSS3", "REST APIs"],
    codeUrl: "https://github.com/ArmandoDiazGit/react-pizza-app",
    liveUrl: null,
  },
  {
    id: 3,
    title: "Movie Database App",
    description:
      "Comprehensive movie search and discovery platform with detailed information, ratings, and watchlist features.",
    tech: ["React", "TypeScript", "RxJS", "REST APIs"],
    codeUrl: "https://github.com/ArmandoDiazGit/react-movie-app",
    liveUrl: null,
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "Real-time weather application with location-based forecasts, interactive maps, and detailed meteorological data.",
    tech: ["Angular", "JavaScript", "CSS3", "Weather API"],
    codeUrl: "https://github.com/placeholder/weather-app",
    liveUrl: null,
  },
  {
    id: 5,
    title: "My-Spa-Website",
    description:
      "Elegant single-page application for a spa business with booking system, service showcase, and customer testimonials.",
    tech: ["React", "JavaScript", "Talwind CSS", "CSS3"],
    codeUrl: "https://github.com/ArmandoDiazGit/My-spa-website",
    liveUrl: "https://my-spa-website-pi.vercel.app/",
  },
];

export const contactFormSubmit = (formData) => {
  // Mock submission - will be replaced with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mock form submission:", formData);
      resolve({ success: true, message: "Message sent successfully!" });
    }, 1000);
  });
};
