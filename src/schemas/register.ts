import { z } from 'zod';

export const registerSchema = z.object({
  name: z.preprocess((val) => val ?? '', z.string().min(1, 'اسمتو وارد کن')),
  email: z.preprocess(
    (val) => val ?? '',
    z.string()
      .min(1, 'ایمیل اجباریه، خالی نزن!')
      .email('ایمیلت غلطه، فرمت درست بنویس!')
  ),
  password: z.preprocess(
    (val) => val ?? '',
    z.string().min(6, 'پسورد حداقل ۶ حرف باشه، قهرمان!')
  ),
});

export type RegisterData = z.infer<typeof registerSchema>;
