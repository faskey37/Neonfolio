import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Instagram, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 pb-8 relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px]">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
            </svg>
        </div>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gradient">Tauqeer Khan</h3>
                <p className="text-muted-foreground">Creating digital experiences that are fast, accessible, and visually appealing. Let's build something amazing together.</p>
                <div className="flex space-x-4">
                  <Link href="https://github.com/faskey37" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-background transition-all"><Github className="h-5 w-5" /></Link>
                  <Link href="https://www.linkedin.com/in/tauqeer-khan-64249a32b/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-background transition-all"><Linkedin className="h-5 w-5" /></Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-background transition-all"><Twitter className="h-5 w-5" /></Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-background transition-all"><Instagram className="h-5 w-5" /></Link>
                </div>
            </div>
            <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                    <li><Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                    <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                    <li><Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link></li>
                    <li><Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-bold mb-4">Contact Info</h4>
                <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> tauqeer.khan.webdev@gmail.com</li>
                    <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +91 8484970238</li>
                </ul>
            </div>
        </div>
        <div className="border-t border-border/20 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Tauqeer Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
