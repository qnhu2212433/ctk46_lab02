import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: "Chào mừng bạn đến với API Lab 3!" });
}