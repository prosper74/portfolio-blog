import Image from 'next/image';
import Link from 'next/link';
import { PostsProps } from '../common/helpers/interfaces';
import BlogCard from '../common/BlogCard';
import PostsNotFound from '../common/PostsNotFound';

interface IProps {
  allPosts: PostsProps;
}

export function BlogPosts({ allPosts }: IProps) {
  return (
    <>
      <section
        id="blog"
        className="sm:container mx-auto px-4 md:px-10 lg:px-20 py-16 break-words"
      >
        <div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">
              Latest Posts
            </h2>
            <p className="text-xl md:text-2xl">Here are my latest blog posts</p>
          </div>

          {allPosts.length === 0 ? (
            <PostsNotFound />
          ) : (
            <div>
              <BlogCard allPosts={allPosts} />

              <div className="flex items-center justify-center">
                <Link
                  href="/blog"
                  className="flex items-center justify-center py-2 px-[10px] text-lg font-semibold text-body bg-primary hover:bg-secondary shadow-button rounded-lg ease-in-out duration-300 hover:translate-y-[0.25rem] max-w-[210px]"
                >
                  See all posts
                  <Image
                    src="/assets/icons/blog_white_icon.svg"
                    alt="Blog icon"
                    width={18}
                    height={18}
                    className="ml-1"
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
