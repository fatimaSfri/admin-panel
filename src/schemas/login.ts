
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string()
  .email('The Email Is Incorrect'),
 password: z.preprocess(
    (val) => val ?? '',
    z.string().min(6, 'پسورد حداقل ۶ حرف باشه، قهرمان!')
  ),

});

export type LoginData = z.infer<typeof loginSchema>;