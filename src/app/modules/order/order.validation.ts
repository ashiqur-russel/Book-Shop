import { z } from 'zod';

const createOrderValidationSchema = z.object({
  body: z.object({
    email: z
      .string()
      .email({ message: 'Invalid email format.' })
      .min(1, { message: 'Email is required.' }),
    user: z.string().refine((val) => /^[0-9a-fA-F]{24}$/.test(val), {
      message: 'User must be a valid ObjectId.',
    }),
    product: z.string().refine((val) => /^[0-9a-fA-F]{24}$/.test(val), {
      message: 'Product must be a valid ObjectId.',
    }),
    payment: z
      .string()
      .refine((val) => /^[0-9a-fA-F]{24}$/.test(val), {
        message: 'Product must be a valid ObjectId.',
      })
      .optional(),
    quantity: z
      .number()
      .int()
      .min(1, { message: 'Quantity must be at least 1.' }),
    totalPrice: z
      .number()
      .min(0, { message: 'Total price must be a non-negative number.' }),
    deliveryStatus: z
      .enum(['pending', 'shipped', 'delivered', 'cancelled', 'revoked'])
      .optional()
      .default('pending'),
  }),
});

const updateOrderValidationSchema = z.object({
  body: z.object({
    email: z.string().email({ message: 'Invalid email format.' }).optional(),
    user: z
      .string()
      .refine((val) => /^[0-9a-fA-F]{24}$/.test(val), {
        message: 'User must be a valid ObjectId.',
      })
      .optional(),
    product: z
      .string()
      .refine((val) => /^[0-9a-fA-F]{24}$/.test(val), {
        message: 'Product must be a valid ObjectId.',
      })
      .optional(),

    quantity: z
      .number()
      .int()
      .min(1, { message: 'Quantity must be at least 1.' })
      .optional(),
    totalPrice: z
      .number()
      .min(0, { message: 'Total price must be a non-negative number.' })
      .optional(),
    deliveryStatus: z
      .enum(['pending', 'shipped', 'delivered', 'cancelled', 'revoked'])
      .optional()
      .default('pending'),
  }),
});

const cancelOrderValidationSchema = z.object({
  body: z.object({
    reason: z.string().optional(),
  }),
});

export const OrderValidation = {
  createOrderValidationSchema,
  updateOrderValidationSchema,
  cancelOrderValidationSchema,
};
