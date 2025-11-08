import { NextRequest } from 'next/server';
import { verifyToken } from './auth';

export function getAuthToken(request: NextRequest): string | null {
  return request.cookies.get('auth-token')?.value || null;
}

export function isAuthenticated(request: NextRequest): boolean {
  const token = getAuthToken(request);
  if (!token) return false;

  const payload = verifyToken(token);
  return payload !== null;
}

export function getAuthUser(request: NextRequest) {
  const token = getAuthToken(request);
  if (!token) return null;

  return verifyToken(token);
}

