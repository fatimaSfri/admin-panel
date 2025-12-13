import { z } from 'zod';

export const contactSchema = z.object({
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters long"),
  message: z.string().min(20, "Message must be at least 20 characters long"),
});


export type ContactData = z.infer<typeof contactSchema>;