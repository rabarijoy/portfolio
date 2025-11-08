import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validation';
import { sendContactEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the form data
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { success: false, error: 'Données invalides', details: validationResult.error.errors },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Honeypot check (anti-spam)
    if (data.honeypot && data.honeypot.length > 0) {
      // Bot detected, silently fail
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Send email
    const result = await sendContactEmail({
      name: data.name,
      email: data.email,
      message: data.message,
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

