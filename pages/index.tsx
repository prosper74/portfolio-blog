import SEO from '../components/Seo';

export default function Home() {
  return (
    <>
      <SEO
        pageTitle="Welcome to my tech World"
        pageDescription="This is my personal portfolio and blog. Feel at home as we build together"
      />

      <main>
        <div className="text-3xl text-green-600 p-2">Hello Devs</div>
      </main>
    </>
  );
}
