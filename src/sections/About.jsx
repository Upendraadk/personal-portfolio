import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing readable, maintainable, and scalable code following modern best practices.",
    },

    {
        icon: Rocket,
        title: "Performance",
        description: "Building fast, responsive, and optimized web applications for a seamless user experience.",
    },

    {
        icon: Users,
        title: "Collaboration",
        description: "Working effectively with teammates, learning from feedback, and contributing to shared goals.",
    },

    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Continuously exploring new technologies and applying them to solve real-world problems.",
    },
]



export const About = () => {
    return(
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-100 text-secondary-foreground">
                            Passionate about
                            <span className="font-serif italic font-normal text-foreground"> building meaningful digital experiences.</span>
                        </h2>

                        <div className="space-y-6 text-muted-foreground animate-fade-in animate-delay-200">
                            <p>
                                I’m Upendra Adhikari, a Computer Engineering student from Nepal with a passion for software development and modern web technologies. I enjoy transforming ideas into responsive, user-friendly applications while writing clean and maintainable code.
                            </p>
                            <p>
                                Currently, I'm focused on mastering React, JavaScript, and frontend development while expanding my knowledge of backend technologies, databases, and AI. My goal is to become a skilled full-stack software engineer who builds impactful digital products.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "Learning never stops, and every project is an opportunity to grow as a developer."
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className=" grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                          <div 
                            key={idx} 
                            className="glass p-6 rounded-2xl animate-fade-in" 
                            style={{animationDelay: `${(idx+1) * 100}ms`}}
                           >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-11 h-10 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div> 
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}