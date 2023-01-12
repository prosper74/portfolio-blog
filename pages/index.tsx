import { PostsProps } from '../components/common/interfaces';
import {
  Banner,
  Portfolio,
  Services,
  Skills,
  Qualifications,
  BlogPosts,
  Testimonials,
  Contact,
} from '../components/home';
import SEO from '../components/Seo';

interface IProps {
  allPosts: PostsProps;
}

export default function Home({ allPosts }: IProps) {
  
  return (
    <>
      <SEO
        pageTitle="Welcome to my tech World"
        pageDescription="This is my personal portfolio and blog. Feel at home as we build together"
      />

      <main>
        <Banner />
        <Skills />
        <Services />
        <Portfolio />
        <Qualifications />
        <Testimonials />
        <BlogPosts allPosts={allPosts} />
        <Contact />
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
