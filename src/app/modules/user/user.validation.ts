import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    user: z.object({
      name: z.string().min(3),
      email: z.string().email({ message: 'Invalid email address' }),
      password: z.string().min(5),
      role: z.string().optional(),
    }),
  }),
});

const changePasswordValidationSchemma = z.object({
  body: z.object({
    oldPassword: z.string().min(5),
    newPassword: z.string().min(5),
  }),
});

const updateUserStatusValidationSchema = z.object({
  body: z.object({
    status: z.enum(['pending', 'active', 'blocked', 'approved']),
  }),
});

export const UserValidation = {
  userValidationSchema,
  changePasswordValidationSchemma,
  updateUserStatusValidationSchema,
};
