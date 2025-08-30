import { Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'hackathon participation certificate',
    issuer: 'TechTrek Hackathon',
    date: 'jan 2025',
    image: 'https://github.com/faskey37/My-Portfolio/blob/main/WhatsApp%20Image%202025-08-25%20at%2010.47.53_7f77d5ad.jpg?raw=true',
    imageHint: 'hackathon participation certificate',
    url: '#',
  },
  {
    title: 'Hackathon Participation Certificate',
    issuer: 'Build 4 Change Hackathon',
    date: 'Aug 2025',
    image: 'https://github.com/faskey37/My-Portfolio/blob/main/Screenshot%202025-08-30%20200201.png?raw=true',
    imageHint: 'hackathon participation certificate',
    url: '#',
  },
  {
    title: 'Canva Design Fundamentals',
    issuer: 'Simplilearn & Canva',
    date: 'Nov 2024',
    image: 'https://github.com/faskey37/My-Portfolio/blob/main/WhatsApp%20Image%202025-08-25%20at%2010.52.57_f5a809ed.jpg?raw=true',
    imageHint: 'design course certificate',
    url: '#',
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-24 sm:py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A collection of certifications I've earned to validate my skills and knowledge.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div key={cert.title} className="bg-card p-4 rounded-lg shadow-lg border border-border/20 transition-all duration-300 ease-in-out hover:shadow-primary/10 hover:-translate-y-2 group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md mb-4">
                <Image
                  unoptimized
                  src={cert.image}
                  alt={cert.title}
                  width={600}
                  height={420}
                  data-ai-hint={cert.imageHint}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button asChild size="sm">
                        <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Verify
                        </Link>
                    </Button>
                </div>
              </div>
              <h3 className="text-lg font-bold font-headline">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
