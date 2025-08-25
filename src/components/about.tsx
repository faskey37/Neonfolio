'use client';

import { useState, useRef, useEffect } from 'react';
import { chatAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, User, CornerDownLeft, Loader2 } from 'lucide-react';
import Image from "next/image";
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export function About() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTo({
                top: viewport.scrollHeight,
                behavior: 'smooth'
            });
        }
    }
  }, [messages]);
  
  useEffect(() => {
    inputRef.current?.focus();
  }, [])


  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentQuery = query.trim();
    if (!currentQuery || isLoading) return;

    setError(null);
    setIsLoading(true);
    setMessages((prev) => [...prev, { role: 'user', content: currentQuery }]);
    
    const formData = new FormData(event.currentTarget);

    try {
        const result = await chatAction(formData);
        
        if (result.response) {
            setMessages((prev) => [...prev, { role: 'assistant', content: result.response as string }]);
        } else if (result.errors?.query) {
            setError(result.errors.query[0]);
            setMessages(prev => prev.slice(0, -1)); // Remove user message if input was invalid
        } else if (result.message && result.message !== 'Success') {
            setError(result.message);
            setMessages(prev => prev.slice(0, -1)); // Remove user message on error
        }
    } catch (e) {
        setError("An unexpected error occurred. Please try again.");
        setMessages(prev => prev.slice(0, -1)); // Remove user message on exception
    } finally {
        setIsLoading(false);
        setQuery('');
        inputRef.current?.focus();
    }
  };

  return (
    <section id="about" className="py-32 bg-card/40 relative overflow-hidden">
       <div className="absolute inset-0 z-0 opacity-5" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
        {/* Floating Icons */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute text-primary/10 text-7xl font-mono font-bold top-1/4 left-1/4 animate-[float_8s_ease-in-out_infinite]">&#123; &#125;</div>
          <div className="absolute text-secondary/10 text-6xl font-mono font-bold bottom-1/4 right-1/4 animate-[float-alt_7s_ease-in-out_infinite]">&lt;/&gt;</div>
          <div className="absolute text-accent/10 text-5xl font-mono font-bold top-1/2 right-1/3 animate-[float_6s_ease-in-out_infinite]">()</div>
           <div className="absolute text-primary/5 text-8xl font-mono font-bold bottom-1/3 left-1/5 animate-[float-alt_9s_ease-in-out_infinite]">&lt;&gt;</div>
          <div className="absolute text-secondary/5 text-4xl font-mono font-bold top-1/3 right-1/5 animate-[float_5s_ease-in-out_infinite]">&#91; &#93;</div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline text-center mb-16">About <span className="text-gradient">Me</span></h2>
            <div className="grid md:grid-cols-5 gap-16 items-center">
                <div className="md:col-span-2 relative w-full max-w-sm mx-auto group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-lg blur-lg opacity-50 animate-pulse group-hover:opacity-75 transition-opacity duration-300"></div>
                    <Image unoptimized src="https://github.com/faskey37/My-Portfolio/blob/main/WhatsApp%20Image%202025-08-24%20at%2023.43.36_02c464b0.jpg?raw=true" data-ai-hint="profile picture" alt="Tauqeer Khan" width={400} height={400} className="relative rounded-lg shadow-xl z-10 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-2" />
                </div>
                <div className="md:col-span-3 space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold font-headline">A Creative Developer Fueled by Curiosity</h3>
                     <p className="text-lg text-muted-foreground">My journey into the world of technology began in the 8th grade, sparked by a deep fascination with turning creative ideas into tangible, digital realities. Now a dedicated Computer Science student, I specialize in full-stack development, where I get to build beautiful, user-friendly interfaces and power them with clean, efficient code. From personal passion projects to professional client work with startups like SphereX, I focus on building digital products that are not just functional, but also visually engaging and seamlessly intuitive. I thrive on the challenge of blending technical precision with a creative vision.</p>
                     <div className="bg-background/30 p-4 rounded-lg border border-border/30 h-[400px] flex flex-col">
                        <h4 className="text-lg font-bold font-headline mb-4 text-gradient flex items-center gap-2"><Bot /> Ask My AI Assistant</h4>
                        <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
                            <div className="space-y-4">
                            {messages.map((msg, index) => (
                                <div key={index} className={cn("flex items-start gap-3", msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                                     {msg.role === 'assistant' && <div className="bg-primary/20 p-2 rounded-full"><Bot className="text-primary w-5 h-5"/></div>}
                                    <div className={cn("max-w-[80%] rounded-lg p-3 text-sm", msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted')}>
                                        {msg.content}
                                    </div>
                                    {msg.role === 'user' && <div className="bg-secondary/20 p-2 rounded-full"><User className="text-secondary w-5 h-5"/></div>}
                                </div>
                            ))}
                             {isLoading && messages[messages.length-1]?.role === 'user' && (
                                <div className="flex items-start gap-3 justify-start">
                                    <div className="bg-primary/20 p-2 rounded-full"><Bot className="text-primary w-5 h-5"/></div>
                                    <div className="bg-muted rounded-lg p-3 text-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse delay-75"></div>
                                            <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse delay-150"></div>
                                            <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse delay-300"></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            </div>
                        </ScrollArea>
                        <form onSubmit={handleFormSubmit} className="mt-4 flex items-center gap-2">
                           <Input 
                             ref={inputRef}
                             name="query"
                             placeholder="Ask me anything about my portfolio..."
                             className="flex-1 bg-card"
                             value={query}
                             onChange={(e) => setQuery(e.target.value)}
                             disabled={isLoading}
                           />
                           <Button type="submit" size="icon" disabled={isLoading}>
                               {isLoading ? <Loader2 className="animate-spin" /> : <CornerDownLeft />}
                           </Button>
                        </form>
                        {error && (
                            <p className="text-red-500 text-sm mt-2">{error}</p>
                        )}
                     </div>
                </div>
            </div>
        </div>
    </section>
  );
}
