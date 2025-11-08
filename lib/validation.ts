import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères').max(100),
  email: z.string().email('Email invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères').max(1000),
  honeypot: z.string().max(0).optional(), // Anti-spam honeypot field
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Login validation schema
export const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
});

export type LoginData = z.infer<typeof loginSchema>;

// Project validation schema
export const projectSchema = z.object({
  slug: z.string().min(1).max(100),
  titleFr: z.string().min(1).max(200),
  titleEn: z.string().min(1).max(200),
  descriptionFr: z.string().max(2000).optional(),
  descriptionEn: z.string().max(2000).optional(),
  image: z.string().url().optional().nullable(),
  tags: z.string().max(200),
  link: z.string().url().optional().nullable(),
  githubLink: z.string().url().optional().nullable(),
  featured: z.boolean().default(false),
  order: z.number().int().default(0),
});

export type ProjectData = z.infer<typeof projectSchema>;

// Price validation schema
export const priceSchema = z.object({
  titleFr: z.string().min(1).max(200),
  titleEn: z.string().min(1).max(200),
  descriptionFr: z.string().max(1000).optional(),
  descriptionEn: z.string().max(1000).optional(),
  price: z.number().positive().optional().nullable(),
  category: z.string().max(50).default('service'),
  order: z.number().int().default(0),
});

export type PriceData = z.infer<typeof priceSchema>;

