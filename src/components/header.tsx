"use client";

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const mainNavLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#freelance', label: 'Freelance' },
];

const moreNavLinks = [
    { href: '#education', label: 'Education' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#volunteering', label: 'Volunteering' },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hasScrolled, setHasScrolled] = React.useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allNavLinks = [...mainNavLinks, ...moreNavLinks];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      hasScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container flex h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
            <i className="fas fa-code text-2xl text-primary"></i>
            <span className="text-xl font-bold font-headline tracking-tighter text-gradient">Tauqeer Khan</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {mainNavLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-primary px-3 py-2 rounded-md">
              {link.label}
            </Link>
          ))}
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-muted-foreground transition-colors hover:text-primary px-3 py-2 rounded-md">
                More <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {moreNavLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild className="font-bold bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity ml-2">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-10">
                <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
                    <i className="fas fa-code text-2xl text-primary"></i>
                    <span className="text-xl font-bold font-headline tracking-tighter text-gradient">Tauqeer Khan</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {allNavLinks.map(link => (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="font-bold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity">
                  <Link href="#contact" onClick={() => setIsOpen(false)}>Contact Me</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
