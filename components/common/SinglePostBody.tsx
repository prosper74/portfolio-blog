import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { timeSince } from './dateFunction';
import { PostsProps } from './interfaces';
import {
  ArrowDownIcon,
  CalendarIcon,
  FavouriteIcon,
  LikeIcon,
} from './svgIcons';

interface IProps {
  post: PostsProps;
}

export default function SinglePostBody({ post }: IProps) {
  const [isLike, setIsLike] = useState(false);
  return (
    <div className="">
      <h2 className="font-mono text-bold text-3xl md:5xl">{post.title}</h2>
      <p className="flex items-center gap-2 italic mt-1">
        <CalendarIcon width="20" height="20" fill="#9932cc" />
        {timeSince(new Date(post.createdAt!))} ago
      </p>

      

      <div className="relative">
        {isLike ? (
          <FavouriteIcon width="38" height="38" />
        ) : (
          <LikeIcon width="38" height="38" />
        )}

        <span className="absolute top-0 left-0 px-[0.2rem] py-[0.14rem] flex items-center justify-center bg-white rounded-full shadow-customBox text-gray-700 text-xs">
          {post.like}
        </span>
      </div>
    </div>
  );
}
