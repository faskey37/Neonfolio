'use client';

import { useState, useMemo } from 'react';
import { ProjectCard, type Project } from './project-card';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const projects: Project[] = [
  {
    title: 'EV Services Web App (Hackathon Project)',
    description: 'Prototype of a service platform for EV vehicle users. Built using Firebase (Firestore, Auth), featuring booking modules, real-time data handling, and user authentication.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    imageHint: 'electric vehicle charging',
    tags: ['Firebase', 'JavaScript', 'Tailwind CSS', 'Firestore'],
    liveUrl: '#',
    codeUrl: '#',
    category: 'fullstack'
  },
  {
    title: 'Quran Learning Website',
    description: 'A website designed for learning Quran, designed using wix website builder which contain inspiring storeis of the prophet and downloadable pdf file for different chapters of quran and details about the surahs of the quran.',
    image: 'https://unsplash.com/photos/XJXWbfSo2f0/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzUzMjUxOTcxfA&force=true',
    imageHint: 'AI writing robot',
    tags: ['Next.js', 'Genkit', 'Tailwind CSS', 'Stripe'],
    liveUrl: 'https://khantauqeer272.wixsite.com/learn-quran',
    category: 'fullstack'
  },
  {
    title: 'Service Booking App',
    description: 'A service booking app named quickfix pro designed to provide general house services like plumbing, elctrical etc; it has two parts the online website and an android app designed using android webview (still work in progress) .',
    image: 'https://unsplash.com/photos/e_MdMMKrgdY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTMxfHx0ZWNofGVufDB8fHx8MTc1MzIzNjM0MHww&force=true',
    imageHint: 'person using phone app',
    tags: ['Firebase', 'JavaScript', 'Tailwind CSS', 'Firestore'],
    liveUrl: 'https://faskey37.github.io/Quick-fix-app/',
    codeUrl: 'https://github.com/faskey37/Quick-fix-app',
    category: 'fullstack'
  },
    {
    title: 'Raha Health App',
    description: 'A healthcare app designed to combine all the healthcare services onto one platform from where you can book health test, check your daily goals your health insight, your profile and much more (still work in progress) .',
    image: 'https://unsplash.com/photos/L0nipfx-Ry4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzUzMjU0OTg3fA&force=true',
    imageHint: 'healthcare technology doctor',
    tags: ['Firebase', 'JavaScript', 'Bootstrap', 'Firestore', 'HTML5', 'API'],
    codeUrl: 'https://github.com/faskey37/raha/tree/staging',
    category: 'fullstack'
  },
  {
    title: 'Portfolio & UI Projects',
    description: 'Designed and built several responsive and interactive UIs using HTML5, CSS3, Tailwind, and Bootstrap. Focused on user-centric layouts and cross-device compatibility.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    imageHint: 'website analytics on laptop',
    tags: ['HTML5', 'CSS3', 'Tailwind', 'Bootstrap'],
    liveUrl: 'https://faskey37.github.io/My-Portfolio/',
    codeUrl: 'https://github.com/faskey37/My-Portfolio',
    category: 'frontend'
  },
  
  {
    title: 'SphereX Technologies',
    description: 'SphereX is engaging with a skilled IT startup to access expert-driven tech solutions aimed at strengthening our digital infrastructure and supporting our growth journey (still work in progress).',
    image: 'https://unsplash.com/photos/YI_9SivVt_s/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzUzMjU0ODQ2fA&force=true',
    imageHint: 'tech startup office',
    tags: ['Firebase', 'JavaScript', 'CSS3', 'Firestore', 'HTML5'],
    liveUrl: '#',
    codeUrl: '#',
    category: 'fullstack'
  },
  {
    title: 'Flappy bird game',
    description: 'I built a simple flappy bird game using javascript',
    image: 'https://unsplash.com/photos/bS46IAXWAO4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cGFjJTIwbWFufGVufDB8fHx8MTc1MzI1NTI3MHww&force=true',
    imageHint: 'weather forecast dashboard',
    tags: ['React', 'Tailwind', 'JavaScript'],
    liveUrl: 'https://faskey37.github.io/Bat-game/',
    codeUrl: 'https://github.com/faskey37/Bat-game',
    category: 'frontend'
  },
   {
    title: 'E-commerce Store UI',
    description: 'A sleek and modern user interface for an e-commerce platform, focusing on a clean user experience and responsive design for both mobile and desktop.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'online shopping e-commerce',
    tags: ['React', 'Tailwind CSS', 'UI/UX'],
    liveUrl: '#',
    codeUrl: '#',
    category: 'frontend'
  },
  {
    title: 'Finview app',
    description: 'a personal finance dashboard designed to help users track expenses, manage budgets, and get AI-powered savings insights.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'API code server',
    tags: ['Node.js', 'React', 'Firebase', 'API'],
    liveUrl: '#',
    codeUrl: '#',
    category: 'backend'
  },
  {
    title: 'React survey app-',
    description: 'I built a very simple survey app using only frontend code.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'weather forecast dashboard',
    tags: ['React', 'Tailwind', 'JavaScript'],
    liveUrl: '#',
    codeUrl: '#',
    category: 'fullstack'
  },
];

const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];

export function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (filter === 'all') {
      return projects;
    }
    return projects.filter(p => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-card/20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A selection of my work. Each project is a testament to my commitment to quality and user-centric design.
          </p>
        </div>

        <div className="flex justify-center gap-2 mt-12 mb-8 flex-wrap">
          {categories.map(category => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              onClick={() => setFilter(category)}
              className={cn(
                "capitalize transition-all duration-300",
                filter === category ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground' : 'bg-transparent'
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
