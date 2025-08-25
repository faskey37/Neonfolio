'use server';

import {z} from 'zod';
import {askChatbot} from '@/ai/flows/portfolio-chat';

const chatSchema = z.object({
  query: z.string().min(1, 'Please enter a message.'),
});

export async function chatAction(formData: FormData) {
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
    const result = await askChatbot({query: validatedFields.data.query});
    return {
      message: 'Success',
      response: result.response,
      errors: {},
    };
  } catch (error) {
    console.error('Error in chatAction:', error);
    return {
      message: 'An unexpected error occurred. Please try again.',
      response: null,
      errors: {},
    };
  }
}

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function sendContactMessageAction(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
      success: false,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  // Here you would typically send the data to your email or a database.
  // For this example, we'll just log it to the server console.
  console.log('New Contact Form Submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}
