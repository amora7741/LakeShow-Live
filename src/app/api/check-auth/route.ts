import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const authCode = process.env.AUTH_CODE;

  try {
    const { passcode } = await req.json();

    if (!passcode) {
      return NextResponse.json(
        { auth: false, message: 'Missing passcode' },
        { status: 400 }
      );
    }

    const codesMatch = authCode === passcode;

    if (!codesMatch) {
      return NextResponse.json({ auth: false }, { status: 403 });
    }

    const cookieStore = await cookies();

    cookieStore.set({
      name: 'auth',
      value: 'true',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24,
    });

    return NextResponse.json({ auth: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { auth: false, message: `Internal server error: ${error}` },
      { status: 500 }
    );
  }
}
