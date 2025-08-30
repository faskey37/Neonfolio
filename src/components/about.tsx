
'use client';

import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-32 bg-card/40 relative overflow-hidden">
       <div className="absolute inset-0 z-0 opacity-5" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
        {/* Floating Icons */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute text-primary/10 text-7xl font-mono font-bold top-1/4 left-1/4 animate-[float_8s_ease-in-out_infinite]">&#9884;</div>
          <div className="absolute text-secondary/10 text-6xl font-mono font-bold bottom-1/4 right-1/4 animate-[float-alt_7s_ease-in-out_infinite]">&#937;</div>
          <div className="absolute text-accent/10 text-5xl font-mono font-bold top-1/2 right-1/3 animate-[float_6s_ease-in-out_infinite]">&#9889;</div>
           <div className="absolute text-primary/5 text-8xl font-mono font-bold bottom-1/3 left-1/5 animate-[float-alt_9s_ease-in-out_infinite]">&#ᛝ</div>
          <div className="absolute text-secondary/5 text-4xl font-mono font-bold top-1/3 right-1/5 animate-[float_5s_ease-in-out_infinite]">&#ᛟ</div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline text-center mb-16">About <span className="text-gradient">Me</span></h2>
            <div className="grid md:grid-cols-5 gap-16 items-center">
                <div className="md:col-span-2 relative w-full max-w-sm mx-auto group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-lg blur-lg opacity-50 animate-pulse-glow transition-opacity duration-300"></div>
                    <Image unoptimized src="https://raw.githubusercontent.com/faskey37/My-Portfolio/main/WhatsApp Image 2025-08-24 at 23.43.36_02c464b0.jpg" data-ai-hint="profile picture" alt="Tauqeer Khan" width={400} height={400} className="relative rounded-lg shadow-xl z-10 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-2" />
                </div>
                <div className="md:col-span-3 space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold font-headline">A Creative Developer Fueled by Curiosity</h3>
                     <p className="text-lg text-muted-foreground">My journey into the world of technology began in the 8th grade, sparked by a deep fascination with turning creative ideas into tangible, digital realities. Now a dedicated Computer Science student, I specialize in full-stack development, where I get to build beautiful, user-friendly interfaces and power them with clean, efficient code.</p>
                     <p className="text-lg text-muted-foreground">From personal passion projects to professional client work with startups like SphereX, I focus on building digital products that are not just functional, but also visually engaging and seamlessly intuitive. I thrive on the challenge of blending technical precision with a creative vision.</p>
                </div>
            </div>
        </div>
    </section>
  );
}
