import { useEffect, useRef, useState } from 'react';
import { init } from 'ityped';
import Image from 'next/image';

export function Banner() {
  const [themeIcon, setThemeIcon] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backSpeed: 60,
      backDelay: 2000,
      strings: [
        'Frontend Developer',
        'Graphics Designer',
        'WordPress Developer',
        'Technical Writer',
      ],
    });
  }, []);

  return (
    <section
      id="home"
      className="sm:container mx-auto px-2 md:px-10 lg:px-20 py-3"
    >
      <div className="py-4 md:py-24 grid gap-4 md:gap-20">
        <div className="homeContent grid">
          <div className="homeSocial">
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
            <a
              href="https://twitter.com/prosperjohnson"
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
          </div>

          <div className="home__img">
            <img src="assets/blob_img.svg" alt="" className="homeBlob" />
          </div>

          {/* Name and introduction */}
          <div className="home__data">
            <h1 className={themeIcon ? 'homeTitleDark' : 'homeTitle'}>
              <span>Hi, I&lsquo;m</span> <br /> Prosper Atu
            </h1>
            <h3
              className={
                themeIcon ? 'homeSubtitle subtitleDark' : 'homeSubtitle'
              }
            >
              A <span ref={textRef} />
            </h3>
            <p className="description">
              I have over four (4) years of experience as a WordPress Developer
              and Graphics Designer. I also have over two (2) years of
              experience building the web using ReactJS, NextJS and GatsbyJS,
              and I have also done some backend development using ExpressJS and
              StrapiCMS. I write about my experience as I learn and build.
            </p>
            <a
              href="https://prosper-blog.netlify.app/"
              alt="My Blog"
              target="_blank"
              className="button"
            >
              <div className="myButton">
                Checkout My Blog
                {/* <UilMessage size="20" className="contactIcon" /> */}
                <div>BLog icon</div>
              </div>
            </a>
          </div>
        </div>

        {/* Scroll to next section icon */}
        <div className="homeScroll">
          <a href="#about">
            {/* <UitArrowCircleDown size="40" className="homeScrollArrow" /> */}
            Arrow DOwn Icon
          </a>
        </div>
      </div>
    </section>
  );
}
