import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('ایمیلت غلطه، دوباره بنویس! 😏'),

});

export type LoginData = z.infer<typeof loginSchema>;