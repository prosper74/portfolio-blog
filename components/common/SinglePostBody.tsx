import { useState, useEffect, useMemo } from 'react';
import { useCookies } from 'react-cookie';
import { motion } from 'framer-motion';
import MarkdownView from 'react-showdown';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';
import { timeSince } from './dateFunction';
import { PostsProps } from './interfaces';
import { CalendarIcon, FavouriteIcon, LikeIcon } from './svgIcons';
import { LoaderImage } from './loader';
import { socialButtonVariants } from './animationVariants';

interface IProps {
  post: PostsProps;
}

export default function SinglePostBody({ post }: IProps) {
  const [likes, setLikes] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const [cookies, setCookie] = useCookies(['likedPostsInCookie']);

  const likedPosts: string[] = useMemo(
    () => cookies.likedPostsInCookie || [],
    [cookies]
  );

  useEffect(() => {
    likedPosts.includes(post._id!) ? setIsLiked(true) : setIsLiked(false);
  }, [likedPosts, post._id]);

  const handleLike = async () => {
    if (likedPosts !== undefined && likedPosts.includes(post._id!)) {
      setIsLiked(true);
    } else {
      setLoading(true);
      let newLikes = likes === undefined ? 1 : likes + 1;
      let data = { like: newLikes };

      try {
        const res = await fetch(
          `http://localhost:3000/api/singlepost?id=${post._id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          }
        );
        const postResponse = await res.json();
        console.log('postResponse', postResponse);
        likedPosts.push(post._id!);
        setCookie('likedPostsInCookie', likedPosts, { path: '/' });
        setLikes(newLikes);
        setIsLiked(true);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

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

      <div className="mb-4">
        <p className="text-lg">Like this post? Drop me a heart 🥰</p>

        {loading ? (
          <LoaderImage width={50} height={50} />
        ) : (
          <button onClick={handleLike} className="relative">
            {isLiked ? (
              <FavouriteIcon width="50" height="50" />
            ) : (
              <LikeIcon width="50" height="50" />
            )}

            <span className="absolute top-0 left-0 px-1 py-[0.2rem] flex items-center justify-center bg-white rounded-full shadow-customBox text-gray-700 text-xs">
              {likes}
            </span>
          </button>
        )}
      </div>

      <div className="flex items-center">
        <p className="font-mono font-semibold text-lg">Share to:</p>
        <motion.span variants={socialButtonVariants} whileHover="hover">
          <FacebookShareButton
            url={`https://atuprosper.com/blog/${post
              .title!.toLowerCase()
              .replace(/ /g, '-')}`}
            quote={`ProsperBlog - ${post.title}`}
            hashtag={'#tech'}
          >
            <FacebookIcon
              size={27}
              round={true}
              className="mt-[8px] mx-[5px]"
            />
          </FacebookShareButton>
        </motion.span>

        <motion.span variants={socialButtonVariants} whileHover="hover">
          <TwitterShareButton
            url={`https://atuprosper.com/blog/${post
              .title!.toLowerCase()
              .replace(/ /g, '-')}`}
            title={`ProsperBlog - ${post.title}`}
          >
            <TwitterIcon size={27} round={true} className="mt-[8px] mx-[5px]" />
          </TwitterShareButton>
        </motion.span>

        <motion.span variants={socialButtonVariants} whileHover="hover">
          <LinkedinShareButton
            url={`https://atuprosper.com/blog/${post
              .title!.toLowerCase()
              .replace(/ /g, '-')}`}
            title={post.title}
            summary={post.content?.substring(0, 120)}
            source="atuProsper blog"
          >
            <LinkedinIcon
              size={27}
              round={true}
              className="mt-[8px] mx-[5px]"
            />
          </LinkedinShareButton>
        </motion.span>

        <motion.span variants={socialButtonVariants} whileHover="hover">
          <WhatsappShareButton
            url={`https://atuprosper.com/blog/${post
              .title!.toLowerCase()
              .replace(/ /g, '-')}`}
            title={post.title}
            separator=":: "
          >
            <WhatsappIcon
              size={30}
              round={true}
              className="mt-[8px] mx-[5px]"
            />
          </WhatsappShareButton>
        </motion.span>
      </div>
    </div>
  );
}
