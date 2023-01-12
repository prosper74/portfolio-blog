import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { timeSince } from '../../components/common/dateFunction';
import { PostsProps } from '../../components/common/interfaces';
import { ArrowDownIcon, CalendarIcon } from '../../components/common/svgIcons';
import SEO from '../../components/Seo';

interface IProps {
  allPosts: PostsProps;
}

export default function Blog({ allPosts }: IProps) {
  return (
    <>
      <SEO
        pageTitle="Blog | Let's learn together"
        pageDescription="This is my personal portfolio and blog. Feel at home as we build together"
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
          className="sm:container mx-auto px-2 md:px-10 lg:px-20 py-16"
        >
          <div>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold md:mt-12">Blog</h2>
            </div>

            <div className="grid xsss:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-12">
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
                    <h3 className="font-mono font-bold text-xl md:text-2xl">
                      {post.title}
                    </h3>
                    <p className="text-base md:text-xl">
                      {post.content?.substring(0, 60)}
                    </p>
                    <p className="flex items-center gap-2 text-sm italic mt-2">
                      <CalendarIcon width="15" height="15" fill="#9932cc" />
                      {timeSince(new Date(post.createdAt))} ago
                    </p>
                  </div>

                  <button className="flex items-center md:text-lg mt-auto">
                    Read
                    <span className="mt-1 rotate-[-90deg] hover:translate-x-1 transition-all">
                      <ArrowDownIcon width="20" height="20" fill="#9932cc" />
                    </span>
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.SITE_URL}/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const allPosts = await res.json();

  return {
    props: { allPosts: allPosts.data },
  };
}
