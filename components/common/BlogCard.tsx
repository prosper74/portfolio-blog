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
  allPosts: PostsProps;
}

export default function BlogCard({ allPosts }: IProps) {
  const [isLike, setIsLike] = useState(false);
  return (
    <div className="grid lg:grid-cols-2 gap-6 my-12">
      {allPosts?.map((post: PostsProps, i: number) => (
        <Link
          key={i}
          href={
            post.title
              ? `/${post?.title.toLowerCase().replace(/ /g, '-')}&id=${
                  post._id
                }`
              : ''
          }
          className="relative flex flex-col content-between break-words py-8 px-4 dark:bg-secondaryDark shadow-customBox rounded-xl transition-all"
        >
          <div className="mb-4">
            <Image
              src="/assets/prospernew.png"
              alt="author"
              width={28}
              height={25}
              className="rounded-full shadow-customBox object-cover mb-3"
            />
            <h3 className="font-mono font-bold text-xl md:text-3xl">
              {post.title}
            </h3>
            <p className="text-base md:text-xl">
              {post.content?.substring(0, 90)}
            </p>
            <p className="flex items-center gap-2 text-sm italic mt-2">
              <CalendarIcon width="15" height="15" fill="#9932cc" />
              {timeSince(new Date(post.createdAt))} ago
            </p>
          </div>

          <div className="flex items-center justify-between">
            <button className="flex items-center md:text-lg mt-auto">
              Read
              <span className="mt-1 rotate-[-90deg] hover:translate-x-1 transition-all">
                <ArrowDownIcon width="20" height="20" fill="#9932cc" />
              </span>
            </button>
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
        </Link>
      ))}
    </div>
  );
}
