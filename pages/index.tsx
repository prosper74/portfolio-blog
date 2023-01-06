import { Banner, Portfolio, Services, Skills } from '../components/home';
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
      </main>
    </>
  );
}
