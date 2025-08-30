
'use client';

import { BarChart, Briefcase, Code, Star, User } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from './ui/card';
import Image from 'next/image';

const projectStats = [
  { label: 'Frontend', value: '3+', icon: <Code className="w-8 h-8 text-primary" /> },
  { label: 'Backend', value: '1+', icon: <BarChart className="w-8 h-8 text-primary" /> },
  { label: 'Full Stack', value: '6+', icon: <Briefcase className="w-8 h-8 text-primary" /> },
];

const testimonials = [
  {
    quote: "Working with Tauqeer was a game-changer. His expertise in full-stack development and commitment to quality resulted in a product that exceeded our expectations. I highly recommend him!",
    author: "Jane Doe",
    title: "CEO, Tech Solutions Inc.",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "woman portrait"
  },
  {
    quote: "The user interface Tauqeer designed is both beautiful and intuitive. He has a keen eye for detail and a deep understanding of user experience. Our customer engagement has increased significantly since the redesign.",
    author: "John Smith",
    title: "Marketing Head, Creative Minds",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "man portrait"
  },
  {
    quote: "Tauqeer's ability to quickly understand our needs and translate them into a functional and scalable application was impressive. He is a reliable and highly skilled developer.",
    author: "Emily White",
    title: "Founder, Innovate Co.",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "woman professional"
  },
];

export function FreelanceWork() {
  return (
    <section id="freelance" className="py-24 sm:py-32 bg-card/40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Freelance <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A snapshot of my freelance work and what clients are saying.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {projectStats.map((stat) => (
            <div key={stat.label} className="bg-card p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-4">{stat.icon}</div>
              <p className="text-4xl font-bold text-gradient">{stat.value}</p>
              <h3 className="text-lg font-semibold text-muted-foreground mt-2">{stat.label} Projects</h3>
            </div>
          ))}
        </div>

        <div className="mt-24">
            <h3 className="text-2xl font-bold font-headline text-center mb-12">Client <span className="text-gradient">Testimonials</span></h3>
             <Carousel 
                opts={{ align: "start", loop: true }}
                className="w-full max-w-4xl mx-auto"
            >
                <CarouselContent>
                {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                        <Card className="h-full flex flex-col justify-between bg-card/50 border-border/20 shadow-md">
                            <CardContent className="p-6 text-center flex flex-col items-center">
                                <Image 
                                    unoptimized
                                    src={testimonial.avatar} 
                                    alt={testimonial.author} 
                                    data-ai-hint={testimonial.avatarHint}
                                    width={80} 
                                    height={80} 
                                    className="rounded-full mb-4 border-4 border-primary/20"
                                />
                                <p className="italic text-muted-foreground mb-4 flex-grow">"{testimonial.quote}"</p>
                                <div className="mt-auto">
                                    <h4 className="font-bold text-lg">{testimonial.author}</h4>
                                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                    <div className="flex justify-center mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
      </div>
    </section>
  );
}
