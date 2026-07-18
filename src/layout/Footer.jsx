import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/Upendraadk",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/upendra-adhikari-710647399",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:adhikareeupendra04@gmail.com",
    label: "Email",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight hover:text-primary transition-colors"
            >
              UA<span className="text-primary">.</span>
            </a>

            <p className="text-sm text-muted-foreground mt-2">
              Computer Engineering Student | Aspiring Software Developer
            </p>

            <p className="text-xs text-muted-foreground mt-1">
              © {currentYear} Upendra Adhikari. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Built with <span className="text-primary font-medium">React</span>,
            {" "}
            <span className="text-primary font-medium">Vite</span> &{" "}
            <span className="text-primary font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};