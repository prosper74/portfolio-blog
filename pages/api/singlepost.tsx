// @ts-nocheck
import type { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import NextCors from 'nextjs-cors';
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
      try {
        await NextCors(req, res, {
          methods: ['PUT'],
          origin: '*',
          optionsSuccessStatus: 200,
          body: db.collection('posts').updateOne(
            {
              _id: ObjectId(id),
            },
            {
              $set: {
                updatedAt: new Date(),
                like,
              },
            }
          ),
        });
        res.json({ status: 200 });
      } catch (error) {
        console.error(error);
      }
  }
}
