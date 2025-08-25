"use client";

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail, Twitter, Instagram, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    // Here you would typically send the data to a serverless function or API endpoint
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    
    toast({
      title: "Message Sent!",
      description: "Thank you for getting in touch. I'll get back to you soon.",
    });
    reset();
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-center mb-16">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto bg-card p-8 rounded-2xl shadow-lg">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Let's Talk</h3>
              <p className="text-muted-foreground">Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!</p>
            </div>
            <div className="space-y-4">
              <a href="mailto:tauqeer.khan.webdev@gmail.com" className="flex items-center gap-4 group">
                <Mail className="w-6 h-6 text-primary" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">tauqeer.khan.webdev@gmail.com</span>
              </a>
              <a href="tel:+918484970238" className="flex items-center gap-4 group">
                <Phone className="w-6 h-6 text-primary" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">+91 8484970238</span>
              </a>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-muted-foreground">Nagpur, Maharashtra</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <Link href="https://github.com/faskey37" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"><Github className="h-5 w-5" /></Link>
                <Link href="https://www.linkedin.com/in/tauqeer-khan-64249a32b/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"><Linkedin className="h-5 w-5" /></Link>
                <Link href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"><Twitter className="h-5 w-5" /></Link>
                <Link href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"><Instagram className="h-5 w-5" /></Link>
              </div>
            </div>
          </div>
          <div className="bg-background/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Send Me a Message</h3>
            <p className="text-muted-foreground mb-6">Fill out the form below and I'll get back to you soon.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input {...register('name')} placeholder="Full Name" className="bg-card" />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <Input {...register('email')} placeholder="Email Address" type="email" className="bg-card" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <Input {...register('subject')} placeholder="Subject" className="bg-card" />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>
              <div>
                <Textarea {...register('message')} placeholder="Your message..." className="bg-card" rows={5} />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <Button type="submit" className="w-full font-bold bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
