import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET all public prices (for frontend)
export async function GET() {
  try {
    const prices = await prisma.price.findMany({
      orderBy: { order: 'asc' },
      select: {
        id: true,
        titleFr: true,
        titleEn: true,
        descriptionFr: true,
        descriptionEn: true,
        price: true,
        category: true,
      },
    });

    return NextResponse.json({ success: true, data: prices }, { status: 200 });
  } catch (error) {
    console.error('Get public prices error:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

