import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimateBorderButton";

const Github = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern and responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, reusable components, dark theme, and an EmailJS-powered contact form.",
    image: "/projects/portfolio.PNG",
    tags: ["React", "Tailwind CSS", "Vite", "EmailJS"],
    link: "https://upendrapersonal-portfolio.vercel.app/",
    github: "https://github.com/Upendraadk/personal-portfolio",
  },
  {
    title: "Hospital Management System",
    description:
      "A desktop application developed to manage patient records, appointments, doctors, and hospital operations efficiently.",
    image: "/projects/hospital.jpg",
    tags: ["Python", "Tkinter", "MySQL"],
    link: "#",
    github: "https://github.com/Upendraadk/Hospital-Management-System",
  },
  {
    title: "Weather Application",
    description:
      "A responsive weather application that fetches real-time weather information using a weather API and displays forecasts in a clean interface.",
    image: "/projects/weatherproject.JPG",
    tags: ["JavaScript", "HTML", "CSS", "API"],
    link: "https://upendra-weather.netlify.app/",
    github: "https://github.com/Upendraadk/Weather-App",
  },
  {
    title: "To-Do List Application",
    description:
      "A task management application with add, edit, delete, and local storage functionality to help users organize daily activities.",
    image: "/projects/todoproject.JPG",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://upendra-to-do-list.netlify.app/",
    github: "https://github.com/Upendraadk/TO-DO-List",
  },
];


export const Projects = () => {
    return (
    <section id="projects" className="py-32 relative overflow-hidden">
        {/* Bg glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                 Featured Projects  
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Turning ideas
                    <span className="font-serif italic font-normal text-foreground">
                        {" "}
                        into real applications.
                    </span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    Here are some of the projects I've built while learning software development. Each project helped me strengthen my skills in frontend development, problem-solving, and building responsive web applications.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                        style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden aspect-video">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div
                                className="absolute inset-0 
                                bg-gradient-to-t from-card via-card/50
                                to-transparent opacity-60"
                            />
                            {/* Overlay Links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a
                                    href={project.link}
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                >
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                                <a
                                    href={project.github}
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>


                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <ArrowUpRight
                                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                                />
                            </div>
                            <p className="text-muted-foreground text-sm">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIdx) => (
                                    <span
                                      key={tagIdx}
                                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All CTA */}
            <div className="text-center mt-12 animate-fade-in animate-delay-500">
                <AnimatedBorderButton
                    onClick={() =>
                        window.open(
                            "https://github.com/Upendraadk?tab=repositories",
                            "_blank"
                        )
                    }
                >
                    View All Projects
                    <ArrowUpRight className="w-5 h-5" />
                </AnimatedBorderButton>   
            </div>

        </div>
    </section>
    )
}