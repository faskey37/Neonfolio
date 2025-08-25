import { Video } from 'lucide-react';

const videos = [
  {
    title: 'EV Services Web App Demo',
    url: 'https://storage.googleapis.com/studio-hosting-assets/portfolio-template/v1/videos/project1.mp4',
    description: 'A brief walkthrough of the EV Services web application prototype.'
  },
  {
    title: 'AI Content Generator in Action',
    url: 'https://storage.googleapis.com/studio-hosting-assets/portfolio-template/v1/videos/project2.mp4',
    description: 'Demonstrating the core features of the AI-powered content platform.'
  },
  {
    title: 'Collaborative Whiteboard Session',
    url: 'https://storage.googleapis.com/studio-hosting-assets/portfolio-template/v1/videos/project3.mp4',
    description: 'See the real-time collaborative whiteboard in use.'
  }
];

export function VideoGallery() {
  return (
    <section id="video-gallery" className="py-24 sm:py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Project <span className="text-gradient">Demos</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Watch my projects in action. Here are a few short demos showcasing some key features.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div key={video.title} className={`bg-card p-4 rounded-lg shadow-lg border border-border/20 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:scale-105 group ${index === 2 && videos.length % 2 !== 0 ? 'lg:col-span-2' : ''}`}>
              <div className="relative aspect-video overflow-hidden rounded-md mb-4">
                <video
                  src={video.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full"
                >
                  Your browser does not support the video tag.
                </video>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
               <h3 className="text-lg font-bold font-headline mb-2 flex items-center gap-2">
                <Video className="w-5 h-5 text-primary"/>
                {video.title}
              </h3>
              <p className="text-sm text-muted-foreground">{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
