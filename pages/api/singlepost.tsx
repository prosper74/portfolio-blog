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
  const { like } = req.body;

  switch (req.method) {
    case 'GET':
      const SinglePost = await db.collection('posts').findOne({
        _id: ObjectId(id),
      });
      res.json({ status: 200, data: SinglePost });
      break;
    case 'PUT':
      const updatePost = await db.collection('posts').updateOne(
        {
          _id: ObjectId(id),
        },
        {
          $set: {
            updatedAt: new Date(),
            like,
          },
        }
      );
      res.json({ status: 200, data: updatePost });
      break;
    case 'DELETE':
      const deletePost = await db.collection('posts').deleteOne({
        _id: ObjectId(id),
      });
      res.json({ status: 200, data: deletePost });
      break;
  }
}
