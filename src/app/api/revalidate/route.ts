import { revalidateTag, revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const type = body?._type;

    if (type) {
      revalidateTag(type, 'max');
    }
    revalidatePath('/', 'layout');

    return NextResponse.json({
      revalidated: true,
      type: type || 'all',
      now: Date.now(),
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
