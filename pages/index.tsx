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

export default function Home() {
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
        <BlogPosts />
        <Contact />
      </main>
    </>
  );
}

// export async function getServerSideProps(context) {
//   let res = await fetch('http://localhost:3000/api/posts', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   let allPosts = await res.json();

//   return {
//     props: { allPosts },
//   };
// }
