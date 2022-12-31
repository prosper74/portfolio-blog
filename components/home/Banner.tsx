import { useEffect, useRef, useState } from 'react';
import { init } from 'ityped';
import Image from 'next/image';
import Link from 'next/link';

export function Banner() {
  const [darkTheme, setDarkTheme] = useState(false);
  // const textRef = useRef();

  // useEffect(() => {
  //   return init(textRef.current, {
  //     showCursor: true,
  //     backSpeed: 60,
  //     backDelay: 2500,
  //     strings: [
  //       'Frontend Developer',
  //       'Graphics Designer',
  //       'WordPress Developer',
  //       'Technical Writer',
  //     ],
  //   });
  // }, []);

  return (
    <section
      id="home"
      className="sm:container mx-auto px-2 md:px-10 lg:px-20 py-3"
    >
      <div className="py-4 md:py-24 grid gap-4 md:gap-20">
        <div className="grid grid-cols-5 items-center">
          <div className="grid auto-cols-max gap-4">
            <a
              href="https://github.com/prosper74"
              target="_blank"
              rel="noreferrer"
              className="homeSocialIcon"
            >
              <Image
                src="/assets/icons/github_light_icon.svg"
                alt="github icon"
                width={22}
                height={22}
              />
            </a>
            <a
              href="https://stackoverflow.com/users/16418999/prosper-atu"
              target="_blank"
              rel="noreferrer"
              className="homeSocialIcon"
            >
              <Image
                src="/assets/icons/stackoverflow_icon.svg"
                alt="stackoverflow icon"
                width={22}
                height={22}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/prosper-atu/"
              target="_blank"
              rel="noreferrer"
              className="homeSocialIcon"
            >
              <Image
                src="/assets/icons/linkedin_icon.svg"
                alt="linkedin icon"
                width={22}
                height={22}
              />
            </a>
            <a
              href="https://twitter.com/prosperjohnson"
              target="_blank"
              rel="noreferrer"
              className="homeSocialIcon"
            >
              <Image
                src="/assets/icons/twitter_icon.svg"
                alt="twitter icon"
                width={22}
                height={22}
              />
            </a>
          </div>

          <div className="col-span-4 sm:col-span-3">
            <Image
              src="/assets/blob_img.svg"
              alt="Prosper image"
              className="sm:w-[370px] md:w-[400px] lg:w-[550px]"
              width={300}
              height={300}
            />
          </div>

          {/* Scroll to next section icon */}
          <Link href="#about" className="w-10 sm:justify-self-end">
            <Image
              src="/assets/icons/arrow_down_icon.svg"
              alt="arrow down icon"
              className="ease-in-out duration-500 hover:translate-y-[0.5rem]"
              width={35}
              height={35}
            />
          </Link>
        </div>
      </div>

      {/* <div className="col-101 sm:col-initial">
            <h1
              className={`text-xl md:text-2xl font-bold ${
                darkTheme ? 'text-body' : 'text-gray-700'
              }`}
            >
              <span>Hi, I&lsquo;m</span> <br />
              <span className="text-4xl md:text-6xl">Prosper Atu</span>
            </h1>
            <h3
              className={`text-xl md:text-2xl ${
                darkTheme ? 'text-body' : 'text-gray-700'
              }`}
            >
              A <span ref={textRef} className="text-primary" />
            </h3>
            <p className="text-gray-600 md:text-xl mt-4 mb-8">
              I have over four (4) years of experience as a WordPress Developer
              and Graphics Designer. I also have over two (2) years of
              experience building the web using ReactJS, NextJS and GatsbyJS,
              and I have also done some backend development using ExpressJS and
              StrapiCMS. I write about my experience as I learn and build.
            </p>
            <Link
              href="/blog"
              className="flex items-center justify-center py-2 px-[10px] text-lg font-semibold text-body bg-primary hover:bg-secondary shadow-button rounded-lg ease-in-out duration-100 max-w-[210px]"
            >
              Checkout My Blog
              <Image
                src="/assets/icons/blog_white_icon.svg"
                alt="Blog icon"
                width={18}
                height={18}
                className="ml-2"
              />
            </Link>
          </div> */}
    </section>
  );
}
