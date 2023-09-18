import { motion } from 'framer-motion';
import { PostsProps } from '../../components/common/helpers/interfaces';
import PostsNotFound from '../../components/common/PostsNotFound';
import SEO from '../../components/Seo';

interface IProps {
  allPosts: PostsProps;
}

export default function Blog({ allPosts }: IProps) {
  return (
    <>
      <SEO
        pageTitle="Designs | Checkout my designs"
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
          className="sm:container mx-auto px-4 md:px-10 lg:px-20 py-16"
        >
          <div>
            <div className="text-center">
              <h2 className="text-4xl md:text-7xl font-bold md:mt-12">Graphic Designs</h2>
              <p className="text-xl md:text-2xl">I started my career as a Graphics designer. Here are some of my designs</p>
            </div>

            {/* {allPosts.length === 0 ? (
              <PostsNotFound />
            ) : (
              <BlogCard allPosts={allPosts} />
            )} */}
          </div>
        </motion.div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/posts`, {
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
