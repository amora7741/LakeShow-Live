import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const authCode = process.env.AUTH_CODE;

  try {
    const { passcode } = await req.json();

    const codesMatch = authCode === passcode;

    if (!codesMatch) {
      return NextResponse.json({ auth: false }, { status: 403 });
    }

    const cookieStore = await cookies();

    cookieStore.set({
      name: 'auth',
      value: 'true',
      httpOnly: true,
      path: '/',
    });

    return NextResponse.json({ auth: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ auth: false, message: error }, { status: 500 });
  }
}
