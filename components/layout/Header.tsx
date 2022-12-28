import Head from 'next/head';
// import Image from 'next/image'

export function Header() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div className="text-3xl text-green-600 p-2">Header section</div>
      </main>
    </>
  );
}
