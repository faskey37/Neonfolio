
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Eye, Send } from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export function Hero() {
  const [text] = useTypewriter({
    words: ['Tauqeer Khan'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary/5"
    >
      <div className="absolute inset-0 z-0 opacity-50" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")'}}></div>
      <div className="absolute inset-0 z-0" id="ember-container">
        {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="ember" />
        ))}
      </div>
       <style jsx>{`
        @keyframes rise {
          to {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
        .ember {
          position: absolute;
          width: 3px;
          height: 3px;
          background: hsl(var(--accent));
          border-radius: 50%;
          bottom: -10px;
          opacity: 0.7;
          animation: rise 10s infinite;
          left: ${() => Math.random() * 100}vw;
          animation-duration: ${() => Math.random() * 5 + 5}s;
          animation-delay: ${() => Math.random() * 10}s;
          box-shadow: 0 0 5px hsl(var(--accent)), 0 0 10px hsl(var(--accent));
        }
      `}</style>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-gradient">{text}</span>
              <Cursor cursorColor="hsl(var(--primary))" />
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-muted-foreground">
              Full Stack Developer & UI/UX Enthusiast
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm passionate about building{' '}
              <span className="text-primary font-semibold">
                digital experiences
              </span>{' '}
              that are fast, accessible, and visually appealing. With hands-on
              experience in JavaScript, HTML/CSS, Firebase, and modern tools, I
              create responsive web applications and continue to explore
              cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                asChild
                className="font-bold bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Link href="#projects">
                  <Eye className="mr-2 h-5 w-5" /> View My Work
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="font-bold">
                <Link href="#contact">
                  <Send className="mr-2 h-5 w-5" /> Contact Me
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block animate-[float_6s_ease-in-out_infinite]">
            <div className="w-[400px] h-[400px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-fiery border-4 border-background mx-auto">
              <Image
                unoptimized
                src="https://raw.githubusercontent.com/faskey37/My-Portfolio/main/my.jpg"
                data-ai-hint="powerful warrior illustration"
                alt="Developer illustration"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
