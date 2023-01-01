import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typical from 'react-typical';

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
    <>
      {/* Banner section  */}
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
            <Link
              href="#about"
              scroll={false}
              className="w-10 sm:justify-self-end transition-all"
            >
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
      </section>

      {/* About me section  */}
      <section
        id="about"
        className="sm:container mx-auto px-2 md:px-10 lg:px-20 py-3"
      >
        <div className="col-101 sm:col-initial">
          <h1
            className="text-xl md:text-2xl font-bold mb-3"
          >
            <span>Hi, I&lsquo;m</span> <br />
            <span className="text-[2.8rem] md:text-7xl">Prosper Atu</span>
          </h1>
          <div className="font-mono text-gray-700 text-lg xs:text-2xl md:text-4xl flex space-x-3">
            <h4> A </h4>
            <strong className="bg-primary text-body px-1">
              <Typical
                steps={[
                  'Frontend Developer',
                  2000,
                  'Graphics Designer',
                  2000,
                  'WordPress Web Designer',
                  2000,
                  'Technical Writer',
                  2000,
                ]}
                wrapper="p"
                loop={Infinity}
              />
            </strong>
          </div>
          <div className="text-gray-600 text-xl md:text-2xl mt-4">
            <p>
              I have over four (4) years of experience as a WordPress Developer
              and Graphics Designer. I also have over two (2) years of
              experience building the web using ReactJS, NextJS and GatsbyJS,
              and I have also done some backend development using ExpressJS and
              StrapiCMS. I write about my experience as I learn and build.
            </p>
            <br />
            <p>
              I strive to follow best practices and use industry-standard tools,
              including Git-Flow, Test Driven Development, Continous Integration
              (Github Action), Linting (ESLint), Code Formatting (Prettier),
              Package Management (NPM) and Build Tool (Webpack).
            </p>
          </div>

          <div className="grid grid-cols-3 items-center text-gray-600 my-12">
            <div className="flex flex-col items-center justify-center">
              <span className="font-bold text-3xl">04+</span>
              <span className="text-center text-lg">
                Years <br />
                Experience
              </span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="font-bold text-3xl">15+</span>
              <span className="text-center text-lg">
                Completed <br />
                Projects
              </span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="font-bold text-3xl">03+</span>
              <span className="text-center text-lg">
                Companies <br />
                Worked
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col xss:flex-row gap-3">
            <Link
              href="/blog"
              className="flex items-center justify-center py-2 px-[10px] text-lg font-semibold text-body bg-primary hover:bg-secondary shadow-button rounded-lg ease-in-out duration-300 hover:translate-y-[0.25rem] max-w-[210px]"
            >
              View My Blog
              <Image
                src="/assets/icons/blog_white_icon.svg"
                alt="Blog icon"
                width={18}
                height={18}
                className="ml-1"
              />
            </Link>

            <Link
              href="/blog"
              className="flex items-center justify-center py-2 px-[10px] text-lg font-semibold text-body bg-primary hover:bg-secondary shadow-button rounded-lg ease-in-out duration-300 hover:translate-y-[0.25rem] max-w-[210px]"
            >
              Download my CV
              <Image
                src="/assets/icons/blog_white_icon.svg"
                alt="Blog icon"
                width={18}
                height={18}
                className="ml-1 ease-in-out duration-500 hover:translate-y-[0.25rem]"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
