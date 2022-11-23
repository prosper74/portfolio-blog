import Head from 'next/head'
// import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to my tech World</title>
        <meta name="description" content="This is my personal portfolio and blog. Feel at home as we build together" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='text-3xl text-green-600 p-2'>
          Hello Devs
        </div>
      </main>
    </div>
  )
}
