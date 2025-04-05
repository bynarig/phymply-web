// src/app/api/pages/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database';
import PageModel from '@/lib/models/pageModel';

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    const pages = await PageModel.find({ published: true });
    return NextResponse.json(pages);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    await connectToDatabase();
    const page = await PageModel.create(data);
    return NextResponse.json(page, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}