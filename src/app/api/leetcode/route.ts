import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) { 
            matchedUser(username: $username) { 
              submitStats { 
                acSubmissionNum { 
                  difficulty 
                  count 
                } 
              } 
            } 
          }
        `,
        variables: { username: "Devansh2005" }
      }),
      // Cache the result for 1 hour to prevent rate limiting
      next: { revalidate: 3600 } 
    });

    const data = await response.json();
    
    const stats = data?.data?.matchedUser?.submitStats?.acSubmissionNum || [];
    
    let result = {
      solvedProblem: 0,
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0
    };

    stats.forEach((item: any) => {
      if (item.difficulty === 'All') result.solvedProblem = item.count;
      if (item.difficulty === 'Easy') result.easySolved = item.count;
      if (item.difficulty === 'Medium') result.mediumSolved = item.count;
      if (item.difficulty === 'Hard') result.hardSolved = item.count;
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("LeetCode fetch error:", error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
