import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  image?: string;
  imageHint?: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl bg-card border-border/50 group card-glow animate-pulse-glow">
      <CardHeader className="p-0 relative">
        <div className="aspect-video overflow-hidden">
          {project.image && (
            <Image
              unoptimized
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
              data-ai-hint={project.imageHint}
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <Badge className="absolute top-4 right-4 capitalize" variant="secondary">{project.category}</Badge>
      </CardHeader>
      <CardContent className="p-6 flex-1 flex flex-col">
        <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
        <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
        <div className="flex gap-2 self-stretch pt-4 mt-auto">
          {project.liveUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
          {project.codeUrl && (
            <Button asChild variant="ghost" size="sm" className="flex-1">
              <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
