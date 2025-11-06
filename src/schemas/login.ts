
import { z } from 'zod';

export const loginSchema = z.object({
   email: z.preprocess(
    (val) => val ?? '',
    z.string()
      .min(1, 'Please Enter Your Email')
      .email('The Email Is Incorrect')
  ),
 password: z.preprocess(
    (val) => val ?? '',
    z.string().min(6, 'Your password is too weak')
  ),
 rememberMe: z.boolean().optional().default(false),
});

export type LoginData = z.infer<typeof loginSchema>;