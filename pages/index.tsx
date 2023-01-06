import { Banner } from '../components/home/Banner';
import { Portfolio } from '../components/home/Portfolio';
import { Services } from '../components/home/Services';
import { Skills } from '../components/home/Skills';
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
