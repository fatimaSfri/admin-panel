import { z } from 'zod';

export const ForgetSchema = z.object({
  email: z.preprocess(
    (val) => val ?? '',
    z.string()
      .min(1, 'Please Enter Your Email')
      .email('The Email Is Incorrect')
  ),
});

export type ForgetData = z.infer<typeof ForgetSchema>;