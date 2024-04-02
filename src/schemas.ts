import { z } from 'zod';

export const MessageSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(30, 'Name must be no more than 30 characters'),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type MessagePayload = z.infer<typeof MessageSchema>;
