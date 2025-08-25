
import { Trophy } from 'lucide-react';
import Image from 'next/image';

const achievements = [
  {
    title: 'ACM Student Chapter Installation – Member Recognition',
    date: '22nd August 2025',
    description: 'Recognized as a member of ACM Student Chapter at ACET during the official installation program. Received badge of membership in presence of Dr. Devishree Naidu (Vice Chair, ACM Nagpur Chapter) and Principal Dr. K.S. Zakiuddin.',
    image: 'https://raw.githubusercontent.com/faskey37/My-Portfolio/b0894122f0a6fca77bc419f6975e57d137d973fb/WhatsApp%20Image%202025-08-22%20at%2023.08.24_930d37df.jpg',
    imageHint: 'group photo event',
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Achievements & Events
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Highlighting my involvement in extracurricular activities and professional events.
          </p>
        </div>
        <div className="space-y-12">
          {achievements.map((item) => (
            <div key={item.title} className="bg-card p-8 rounded-lg shadow-lg border border-border/20 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{item.date}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{item.description}</p>
              <div className="relative overflow-hidden rounded-lg max-w-lg mx-auto">
                <Image
                  unoptimized
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  data-ai-hint={item.imageHint}
                  className="object-cover w-full h-auto rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
