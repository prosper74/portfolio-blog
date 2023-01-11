import type { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db('myBlog');
  const { id } = req.query;
  const { title, content, like, thumbnail } = req.body;

  switch (req.method) {
    case 'POST':
      let myPost = await db.collection('posts').insertOne({
        title,
        content,
        createdAt: new Date(),
        updatedAt: new Date(),
        like,
        thumbnail,
      });
      res.json(myPost);
      break;
    case 'GET':
      const allPosts = await db.collection('posts').find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
    case 'DELETE':
      const deletePost = await db.collection('posts').deleteOne({
        _id: ObjectId(id),
      });
      res.json({ status: 200, data: deletePost });
      break;
  }
}
