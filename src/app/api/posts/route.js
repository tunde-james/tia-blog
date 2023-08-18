import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import post from '@/models/post';

export async function GET(request) {
  try {
    await connect();

    const posts = await post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
}
