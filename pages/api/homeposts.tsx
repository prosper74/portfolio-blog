import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db('myBlog');

  try {
    const allPosts = await db
      .collection('posts')
      .find({})
      .limit(4)
      .sort({ createdAt: -1 })
      .toArray();

    res.json({ status: 200, data: allPosts });
  } catch (e) {
    console.error(e);
  }
}
