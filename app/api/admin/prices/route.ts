import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/middleware-auth';
import { prisma } from '@/lib/prisma';
import { priceSchema } from '@/lib/validation';

// GET all prices
export async function GET() {
  try {
    const prices = await prisma.price.findMany({
      orderBy: { order: 'asc' },
    });

    return NextResponse.json({ success: true, data: prices }, { status: 200 });
  } catch (error) {
    console.error('Get prices error:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

// POST create new price
export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ success: false, error: 'Non autorisé' }, { status: 401 });
  }

  try {
    const body = await request.json();

    const validationResult = priceSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { success: false, error: 'Données invalides', details: validationResult.error.errors },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    const price = await prisma.price.create({
      data,
    });

    return NextResponse.json({ success: true, data: price }, { status: 201 });
  } catch (error) {
    console.error('Create price error:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

