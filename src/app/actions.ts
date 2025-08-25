"use server";

import { z } from 'zod';
import { askChatbot } from '@/ai/flows/portfolio-chat';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
    };
  }
  
  // In a real application, you would send an email or save to a database.
  // For this example, we'll just log the data to the console.
  console.log('New contact form submission:', validatedFields.data);

  return {
    message: 'Thank you for your message! I will get back to you soon.',
    errors: {},
    isSuccess: true,
  };
}

const chatSchema = z.object({
  query: z.string().min(2, 'Please enter at least 2 characters.'),
});

export async function chatAction(prevState: any, formData: FormData) {
    const validatedFields = chatSchema.safeParse({
        query: formData.get('query'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please correct the errors and try again.',
            response: null,
        };
    }

    try {
        const result = await askChatbot({ query: validatedFields.data.query });
        return {
            message: 'Response received!',
            response: result.response,
            errors: {},
        }
    } catch (error) {
        console.error(error);
        return {
            message: 'Failed to get response. Please try again.',
            response: null,
            errors: {},
        }
    }
}
