import { motion } from 'framer-motion';
import Link from 'next/link';
import { PostsProps } from '../../components/common/interfaces';
import SinglePostBody from '../../components/common/SinglePostBody';
import { ArrowDownIcon } from '../../components/common/svgIcons';
import SEO from '../../components/Seo';

interface IProps {
  post: PostsProps;
}

export default function SinglePost({ post }: IProps) {
  return (
    <>
      <SEO
        pageTitle={`Blog | ${post.title}`}
        pageDescription={post.content?.substring(0, 150)}
      />

      <main>
        <motion.div
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            type: 'spring',
            stiffness: 120,
          }}
          className="sm:container mx-auto px-4 md:px-10 lg:px-20 pb-16 md:pt-16"
        >
          <Link href="/blog" className="flex items-center md:text-lg mt-2">
            <span className="mt-1 rotate-[90deg] hover:translate-x-1 transition-all">
              <ArrowDownIcon width="35" height="35" fill="#9932cc" />
            </span>
            Back to all posts
          </Link>

          <div className="mt-4 md:mt-6 lg:max-w-[70%] mx-auto">
            <SinglePostBody post={post} />
          </div>
        </motion.div>
      </main>
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  const singlePost = params.singlePost;
  const singlePostId = singlePost.slice(singlePost.length - 24);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/singlepost?id=${singlePostId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const post = await res.json();

  return {
    props: { post: post.data },
  };
}
