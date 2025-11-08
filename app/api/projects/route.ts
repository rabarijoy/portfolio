import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET all public projects (for frontend)
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: [{ featured: 'desc' }, { order: 'asc' }],
      select: {
        id: true,
        slug: true,
        titleFr: true,
        titleEn: true,
        descriptionFr: true,
        descriptionEn: true,
        image: true,
        tags: true,
        link: true,
        githubLink: true,
        featured: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ success: true, data: projects }, { status: 200 });
  } catch (error) {
    console.error('Get public projects error:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

