import { z } from 'zod';

export const registerSchema = z.object({
  name: z.preprocess((val) => val ?? '', z.string().min(1, 'Please Enter Your Name')),
  email: z.preprocess(
    (val) => val ?? '',
    z.string()
      .min(1, 'Please Enter Your Email')
      .email('The Email Is Incorrect')
  ),
  password: z.preprocess(
    (val) => val ?? '',
    z.string().min(6, 'Your password is too weak.')
  ),
});

export type RegisterData = z.infer<typeof registerSchema>;
