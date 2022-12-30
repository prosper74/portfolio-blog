import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export function Header() {
  const [scrollup, setScrollup] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScrollup(true);
    } else {
      setScrollup(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollup]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header
        className={`max-md:shadow-top fixed bottom-0 md:top-0 inset-x-0 w-full font-medium bg-body z-[100] ${
          scrollup && 'shadow-lg'
        }`}
      >
        <nav className="flex justify-between items-center sm:container mx-auto px-4 md:px-10 lg:px-20 py-3">
          <a
            href="#home"
            className="text-primary text-2xl md:text-3xl"
          >
            atuProsper.
          </a>
          <div className="flex items-center gap-5">
            <div
              className={`max-md:fixed max-md:bottom-0 max-md:left-0 max-md:w-full max-md:bg-body max-md:shadow-top max-md:p-6 max-md:rounded-t-2xl max-md:z-[1000] max-md:ease-in-out max-md:duration-300 ${
                menuOpen ? 'max-md:bottom-0' : 'max-md:bottom-[-100%]'
              }`}
            >
              <ul
                className="grid grid-cols-3 text-md text-gray-600 mb-6 md:flex md:items-center gap-5"
                onClick={() => setMenuOpen(false)}
              >
                <li>
                  <a
                    href="#about"
                    className="flex justify-center items-center flex-col hover:text-primary"
                  >
                    <Image
                      src="/assets/icons/user_icon.svg"
                      alt="user icon"
                      width={25}
                      height={25}
                      className="md:hidden"
                    />
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="flex justify-center items-center flex-col hover:text-primary"
                  >
                    <Image
                      src="/assets/icons/briefcase_icon.svg"
                      alt="user icon"
                      width={25}
                      height={25}
                      className="md:hidden"
                    />
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="flex justify-center items-center flex-col hover:text-primary"
                  >
                    <Image
                      src="/assets/icons/services_icon.svg"
                      alt="user icon"
                      width={25}
                      height={25}
                      className="md:hidden"
                    />
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="flex justify-center items-center flex-col hover:text-primary"
                  >
                    <Image
                      src="/assets/icons/file_icon.svg"
                      alt="user icon"
                      width={25}
                      height={25}
                      className="md:hidden"
                    />
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="flex justify-center items-center flex-col hover:text-primary"
                  >
                    <Image
                      src="/assets/icons/blog_icon.svg"
                      alt="user icon"
                      width={25}
                      height={25}
                      className="md:hidden"
                    />
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="flex justify-center items-center flex-col hover:text-primary"
                  >
                    <Image
                      src="/assets/icons/contact_icon.svg"
                      alt="user icon"
                      width={25}
                      height={25}
                      className="md:hidden"
                    />
                    Contact
                  </a>
                </li>
              </ul>
              <button
                className="md:hidden absolute bottom-4 right-8"
                onClick={() => setMenuOpen(false)}
              >
                <Image
                  src="/assets/icons/close_circled_icon.svg"
                  alt="user icon"
                  width={25}
                  height={25}
                  className="md:hidden"
                />
              </button>
            </div>

            <div className="max-md:flex max-md:items-center max-md:gap-5">
              <div
                className="changeTheme"
                onClick={() => setDarkTheme(!darkTheme)}
              >
                {darkTheme ? (
                  <Image
                    src="/assets/icons/moon_icon.svg"
                    alt="user icon"
                    width={22}
                    height={22}
                    className="ease-in-out"
                  />
                ) : (
                  <Image
                    src="/assets/icons/sun_icon.svg"
                    alt="user icon"
                    width={22}
                    height={22}
                    className="ease-in-out"
                  />
                )}
              </div>
              <button
                className="md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Image
                  src="/assets/icons/ui_icon.svg"
                  alt="user icon"
                  width={22}
                  height={22}
                  className="md:hidden"
                />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
