import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/middleware-auth';
import { prisma } from '@/lib/prisma';
import { priceSchema } from '@/lib/validation';

// GET single price
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const price = await prisma.price.findUnique({
      where: { id },
    });

    if (!price) {
      return NextResponse.json(
        { success: false, error: 'Tarif non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: price }, { status: 200 });
  } catch (error) {
    console.error('Get price error:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

// PUT update price
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ success: false, error: 'Non autorisé' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await request.json();

    const validationResult = priceSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { success: false, error: 'Données invalides', details: validationResult.error.errors },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    const price = await prisma.price.findUnique({
      where: { id },
    });

    if (!price) {
      return NextResponse.json(
        { success: false, error: 'Tarif non trouvé' },
        { status: 404 }
      );
    }

    const updatedPrice = await prisma.price.update({
      where: { id },
      data,
    });

    return NextResponse.json({ success: true, data: updatedPrice }, { status: 200 });
  } catch (error) {
    console.error('Update price error:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

// DELETE price
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ success: false, error: 'Non autorisé' }, { status: 401 });
  }

  try {
    const { id } = await params;

    const price = await prisma.price.findUnique({
      where: { id },
    });

    if (!price) {
      return NextResponse.json(
        { success: false, error: 'Tarif non trouvé' },
        { status: 404 }
      );
    }

    await prisma.price.delete({
      where: { id },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Delete price error:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

