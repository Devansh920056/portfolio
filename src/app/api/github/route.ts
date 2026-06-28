import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://api.github.com/users/Devansh920056', {
      // Don't aggressively cache so stats stay perfectly in sync
      next: { revalidate: 0 } 
    });

    const data = await response.json();

    return NextResponse.json({
      public_repos: data.public_repos || 0
    });
  } catch (error) {
    console.error("GitHub fetch error:", error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
