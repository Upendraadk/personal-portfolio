import {
  Code2,
  Database,
  Globe,
  Wrench,
  Brain,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      "Django",
      "Flask",
      "REST API",
      "EmailJS",
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: [
      "C",
      "C++",
      "Python",
      "SQL",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
    ],
  },
  {
    title: "Currently Learning",
    icon: Brain,
    skills: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Docker",
      "OpenCV",
      "Machine Learning",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Skills & Technologies
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-secondary-foreground">
            Technologies I use to
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              build modern applications.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animate-delay-200">
            I enjoy learning new technologies and continuously improving my
            skills by building practical projects and solving real-world
            problems.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-surface border border-border text-sm hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};