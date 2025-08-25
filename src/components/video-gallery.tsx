'use client';

import { Video, Play, Download } from 'lucide-react';
import { useState, useRef } from 'react';

const videos = [
  {
    title: 'Finview app',
    url: 'https://raw.githubusercontent.com/faskey37/My-Portfolio/main/Untitled%20video%20-%20Made%20with%20Clipchamp%20(3).mp4',
    poster: 'https://placehold.co/800x450/3b82f6/white?text=Finview+Demo',
    description: 'A brief walkthrough of the Finview web application prototype.',
    githubUrl: 'https://github.com/faskey37/My-Portfolio/blob/main/Untitled%20video%20-%20Made%20with%20Clipchamp%20(3).mp4'
  },
  {
    title: 'React survey app',
    url: 'https://raw.githubusercontent.com/faskey37/My-Portfolio/main/Untitled%20video%20-%20Made%20with%20Clipchamp%20(2).mp4',
    poster: 'https://placehold.co/800x450/10b981/white?text=Survey+App+Demo',
    description: 'Demonstrating the features of the survey app',
    githubUrl: 'https://github.com/faskey37/My-Portfolio/blob/main/Untitled%20video%20-%20Made%20with%20Clipchamp%20(2).mp4'
  },
  {
    title: 'Flappy Bird Game',
    url: 'https://raw.githubusercontent.com/faskey37/My-Portfolio/main/Untitled%20video%20-%20Made%20with%20Clipchamp%20(1).mp4',
    poster: 'https://placehold.co/800x450/f59e0b/white?text=Project+Demo',
    description: 'See this project in action.',
    githubUrl: 'https://github.com/faskey37/My-Portfolio/blob/main/Untitled%20video%20-%20Made%20with%20Clipchamp%20(1).mp4'
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
        
        <div className="mt-8 mb-12 bg-muted/30 p-6 rounded-lg border border-border max-w-3xl mx-auto">
          <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
            <Video className="w-5 h-5 text-primary" />
            Video Playback Tips
          </h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• Videos may load slowly due to GitHub hosting limitations</li>
            <li>• Click the play button to start playback</li>
            <li>• For best experience, download videos using the download button</li>
            <li>• Lower quality helps with slower connections</li>
          </ul>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <VideoPlayer 
              key={video.title} 
              video={video} 
              index={index} 
              totalVideos={videos.length} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoPlayer({ video, index, totalVideos }: { 
  video: any; 
  index: number; 
  totalVideos: number; 
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [quality, setQuality] = useState('auto');
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          setHasError(true);
        });
      }
      setIsPlaying(!isPlaying);
      setShowPlayButton(false);
      
      // Hide play button again after clicking it
      setTimeout(() => setShowPlayButton(false), 2000);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleQualityChange = (newQuality: string) => {
    setQuality(newQuality);
    // In a real app, you would switch video sources here
  };

  return (
    <div className={`bg-card p-4 rounded-lg shadow-lg border border-border/20 transition-all duration-300 ease-in-out hover:shadow-xl group ${index === 2 && totalVideos % 2 !== 0 ? 'lg:col-span-2' : ''}`}>
      <div className="relative aspect-video overflow-hidden rounded-md mb-4">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        )}
        
        {hasError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-muted text-muted-foreground p-4">
            <Play className="w-12 h-12 mb-2" />
            <p className="text-sm text-center mb-4">Video cannot be played in browser</p>
            <a 
              href={video.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm flex items-center gap-2 hover:underline"
            >
              <Download className="w-4 h-4" />
              Download video
            </a>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              src={video.url}
              poster={video.poster}
              loop
              muted
              playsInline
              preload="metadata"
              crossOrigin="anonymous"
              className="object-cover w-full h-full cursor-pointer"
              onError={handleError}
              onLoadedData={handleLoad}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onClick={handleVideoClick}
            >
              Your browser does not support the video tag.
            </video>
            
            {!isPlaying && showPlayButton && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                onClick={togglePlay}
              >
                <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center hover:bg-primary transition-colors">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
            )}
            
            <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {quality === 'auto' ? 'Auto quality' : 'Low quality'}
            </div>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
      </div>
      
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold font-headline flex items-center gap-2">
          <Video className="w-5 h-5 text-primary"/>
          {video.title}
        </h3>
        
        <div className="flex gap-2">
          <button 
            onClick={() => handleQualityChange(quality === 'auto' ? 'low' : 'auto')}
            className="text-xs bg-muted hover:bg-muted/80 px-2 py-1 rounded transition-colors"
            title="Toggle video quality"
          >
            {quality === 'auto' ? 'Auto' : 'Low'}
          </button>
          
          <a 
            href={video.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-muted hover:bg-muted/80 p-1 rounded transition-colors"
            title="Download video"
          >
            <Download className="w-3 h-3" />
          </a>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground">{video.description}</p>
    </div>
  );
}