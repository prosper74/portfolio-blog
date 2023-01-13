import { useState } from 'react';
import { timeSince } from './dateFunction';
import { PostsProps } from './interfaces';
import {
  CalendarIcon,
  FavouriteIcon,
  LikeIcon,
} from './svgIcons';
import MarkdownView from 'react-showdown';

interface IProps {
  post: PostsProps;
}

export default function SinglePostBody({ post }: IProps) {
  const [isLike, setIsLike] = useState(false);
  return (
    <div className="">
      <h2 className="font-mono text-bold text-3xl md:text-5xl">{post.title}</h2>
      <p className="flex items-center gap-2 italic mt-1">
        <CalendarIcon width="20" height="20" fill="#9932cc" />
        {timeSince(new Date(post.createdAt!))} ago
      </p>

      <div className="markdown-view my-8">
        <MarkdownView markdown={post.content!} />
      </div>

      <div>
        <p className="text-lg">Like this post? Drop me a heart 🥰</p>
        <div className="relative">
          {isLike ? (
            <FavouriteIcon width="50" height="50" />
          ) : (
            <LikeIcon width="50" height="50" />
          )}

          <span className="absolute top-0 left-0 px-1 py-[0.2rem] flex items-center justify-center bg-white rounded-full shadow-customBox text-gray-700 text-xs">
            {post.like}
          </span>
        </div>
      </div>
    </div>
  );
}
