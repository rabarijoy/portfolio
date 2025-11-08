import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated, getAuthUser } from '@/lib/middleware-auth';

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const user = getAuthUser(request);
  return NextResponse.json({ success: true, user }, { status: 200 });
}

