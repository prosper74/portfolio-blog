import { motion } from 'framer-motion';
import BlogCard from '../../components/common/BlogCard';
import { PostsProps } from '../../components/common/interfaces';
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
              <h2 className="text-3xl md:text-5xl font-bold md:mt-12">Blog</h2>
            </div>
            <BlogCard allPosts={allPosts} />
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
