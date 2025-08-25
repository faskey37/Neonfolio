import { HandHeart, Users, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const volunteeringData = [
  {
    title: 'Traffic Awareness & Road Safety Campaign',
    date: '1st February 2025',
    organizer: 'Rotary Club of Nagpur North (in collaboration with Nagpur Police & partners)',
    venue: 'Auditorium, Commissioner of Police Office, Civil Lines, Nagpur',
    role: 'Volunteer',
    responsibilities: [
      'Assisted in managing participants during the awareness drive.',
      'Supported coordination between organizing teams and attendees.',
      'Helped in spreading awareness messages on traffic rules and road safety.',
    ],
    reflection: "Being part of this campaign gave me an opportunity to contribute towards community welfare and learn the importance of teamwork in social initiatives.",
    image: 'https://github.com/faskey37/My-Portfolio/blob/main/WhatsApp%20Image%202025-08-24%20at%2023.38.43_76362cbf.jpg?raw=true',
    imageHint: 'community event volunteering',
  },
];

export function Volunteering() {
  return (
    <section id="volunteering" className="py-24 sm:py-32 bg-card/20">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Volunteering & Social Initiatives
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Contributing to the community and making a positive impact.
          </p>
        </div>
        <div className="space-y-12">
          {volunteeringData.map((item) => (
            <div key={item.title} className="bg-card p-8 rounded-2xl shadow-lg border border-border/20 transition-all duration-300 ease-in-out hover:shadow-primary/10 hover:-translate-y-2">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-2/3">
                  <div className="flex items-center gap-4 mb-2">
                     <div className="bg-secondary/10 text-secondary p-3 rounded-full">
                        <HandHeart className="h-6 w-6" />
                     </div>
                     <h3 className="text-2xl font-bold font-headline text-gradient">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium mb-4">{item.date} • {item.venue}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Users className="w-5 h-5 text-primary"/> Role & Responsibilities</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2">
                      {item.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                   <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
                    {item.reflection}
                   </blockquote>
                </div>

                <div className="w-full md:w-1/3">
                    <div className="relative overflow-hidden rounded-lg shadow-md group">
                        <Image
                        unoptimized
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={400}
                        data-ai-hint={item.imageHint}
                        className="object-cover w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
