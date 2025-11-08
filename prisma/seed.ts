import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create admin user (password: admin123 - CHANGE THIS IN PRODUCTION!)
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: hashedPassword,
    },
  });
  console.log('✅ Admin user created:', admin.email);

  // Create sample projects
  const projects = await Promise.all([
    prisma.project.upsert({
      where: { slug: 'sample-project-1' },
      update: {},
      create: {
        slug: 'sample-project-1',
        titleFr: 'Projet Exemple 1',
        titleEn: 'Sample Project 1',
        descriptionFr: 'Description du projet exemple en français',
        descriptionEn: 'Sample project description in English',
        tags: 'React,Next.js,TypeScript',
        featured: true,
        order: 1,
      },
    }),
    prisma.project.upsert({
      where: { slug: 'sample-project-2' },
      update: {},
      create: {
        slug: 'sample-project-2',
        titleFr: 'Projet Exemple 2',
        titleEn: 'Sample Project 2',
        descriptionFr: 'Description du projet exemple 2 en français',
        descriptionEn: 'Sample project 2 description in English',
        tags: 'Vue.js,Tailwind',
        featured: false,
        order: 2,
      },
    }),
  ]);
  console.log(`✅ Created ${projects.length} sample projects`);

  // Create sample prices
  const prices = await Promise.all([
    prisma.price.upsert({
      where: { id: 'price-1' },
      update: {},
      create: {
        id: 'price-1',
        titleFr: 'Site Vitrine',
        titleEn: 'Showcase Website',
        descriptionFr: 'Site web vitrine avec design moderne',
        descriptionEn: 'Modern showcase website',
        price: 1500,
        category: 'service',
        order: 1,
      },
    }),
    prisma.price.upsert({
      where: { id: 'price-2' },
      update: {},
      create: {
        id: 'price-2',
        titleFr: 'Application Web',
        titleEn: 'Web Application',
        descriptionFr: 'Application web complète avec backend',
        descriptionEn: 'Complete web application with backend',
        price: null, // On demand
        category: 'service',
        order: 2,
      },
    }),
  ]);
  console.log(`✅ Created ${prices.length} sample prices`);

  console.log('🎉 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

