import Image from 'next/image';
import Link from 'next/link';
import Typical from 'react-typical';
import { motion } from 'framer-motion';

export function Banner() {
  return (
    <>
      {/* Banner section  */}
      <section
        id="home"
        className="sm:container mx-auto px-2 md:px-10 lg:px-20 pt-10 md:pt-24"
      >
        <div className="grid gap-4 md:gap-20">
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
                  width={27}
                  height={27}
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
                  width={27}
                  height={27}
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
                  width={27}
                  height={27}
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
                  width={27}
                  height={27}
                />
              </a>
            </div>

            <motion.div
              animate={{ y: ['5%', '-5%', '5%'] }}
              transition={{ ease: 'linear', duration: 3, repeat: Infinity }}
              className="col-span-4 sm:col-span-3"
            >
              <Image
                src="/assets/blob_img.svg"
                alt="Prosper image"
                className="sm:w-[370px] md:w-[400px] lg:w-[550px]"
                width={300}
                height={300}
              />
            </motion.div>

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
        className="sm:container mx-auto px-2 md:px-10 lg:px-20 py-16"
      >
        <div className="col-101 sm:col-initial">
          <h1 className="text-xl md:text-2xl font-bold mb-3">
            <span>Hi, I&lsquo;m</span> <br />
            <span className="text-[2.8rem] md:text-7xl">Prosper Atu</span>
          </h1>
          <div className="font-mono text-lg xs:text-2xl md:text-4xl flex space-x-3">
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
                wrapper="span"
                loop={Infinity}
              />
            </strong>
          </div>

          <div className="text-xl md:text-2xl mt-4">
            <p>
              Prosper Atu is a dedicated software engineer with a passion for
              creating impactful digital solutions. With 2 years of hands-on
              experience in front-end web development, Prosper is well-versed in
              HTML, CSS, JavaScript, ReactJs, Go, and other modern web
              development tools.
            </p>
            <br />
            <p>
              His recent collaboration on a JAMSTACK e-learning app for
              Loctechng, where he led the frontend development using Gatsby JS,
              showcases his expertise in building cutting-edge projects.
              Additionally, with over 4 years of experience as a WordPress Web
              Designer and Graphics Designer, Prosper is adept at delivering
              high-quality results for clients.
            </p>
            <br />
            <p>
              If you&apos;re looking for a resourceful software engineer who can
              bring your projects to life with a creative touch, Prosper would
              be delighted to connect with you. He also understand the importance of
              business growth. He can analyse the needs of your business, and
              contribute the specific value your business needs using his
              engineering skills.
            </p>
          </div>

          <hr className="bg-primary my-6" />
          <div className="font-mono text-md md:text-2xl">
            <h4> He is currently </h4>
            <span className="flex space-x-4 my-2">
              🚀
              <Typical
                steps={[
                  'Enrolled in ALX Software Engineering Program (15 months)',
                  3000,
                  'Learning Docker',
                  2000,
                  'Learning Microservices Architecture',
                  3000,
                ]}
                wrapper="span"
                loop={Infinity}
              />
            </span>
          </div>

          <div className="grid grid-cols-3 items-center my-12 text-base xss:text-lg">
            <div className="flex flex-col items-center justify-center">
              <span className="font-bold text-3xl">04+</span>
              <span className="text-center">
                Years <br />
                Experience
              </span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="font-bold text-3xl">15+</span>
              <span className="text-center">
                Completed <br />
                Projects
              </span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="font-bold text-3xl">03+</span>
              <span className="text-center">
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

            <a
              href="/assets/cv/resume.pdf"
              target="_blank"
              className="tooltip flex items-center justify-center py-2 px-[10px] text-lg font-semibold text-body bg-primary hover:bg-secondary shadow-button rounded-lg ease-in-out duration-300 hover:translate-y-[0.25rem] max-w-[210px]"
              data-tip="hello"
            >
              Download my CV
              <Image
                src="/assets/icons/blog_white_icon.svg"
                alt="Blog icon"
                width={18}
                height={18}
                className="ml-1 ease-in-out duration-500 hover:translate-y-[0.25rem]"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
