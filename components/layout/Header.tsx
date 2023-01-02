import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { ScrollProps } from '../common/interfaces';

export function Header({ scrollup, setScrollup }: ScrollProps) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScrollup(true);
    } else {
      setScrollup(false);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <Image
          src="/assets/icons/moon_icon.svg"
          alt="user icon"
          width={22}
          height={22}
          className="ease-in-out"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <Image
          src="/assets/icons/sun_icon.svg"
          alt="user icon"
          width={22}
          height={22}
          className="ease-in-out"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header
        className={`max-md:shadow-top fixed max-md:bottom-0 md:top-0 inset-x-0 w-full font-medium bg-body z-[100] ${
          scrollup && 'shadow-lg'
        }`}
      >
        <nav className="flex justify-between items-center gap-5 sm:container mx-auto px-2 md:px-10 lg:px-20 py-3">
          <Link
            href="/#home"
            scroll={false}
            className="text-primary text-2xl md:text-3xl"
          >
            atuProsper.
          </Link>

          <div
            className={`max-md:fixed max-md:left-0 max-md:w-full max-md:bg-body max-md:shadow-top max-md:p-6 max-md:rounded-t-3xl max-md:z-[1000] max-md:ease-in-out max-md:duration-300 md:ml-auto ${
              menuOpen ? 'max-md:bottom-0' : 'max-md:bottom-[-100%]'
            }`}
          >
            <ul
              className="grid grid-cols-3 text-md text-gray-600 max-md:mb-6 md:flex gap-5"
              onClick={() => setMenuOpen(false)}
            >
              <li>
                <Link
                  href="/#about"
                  scroll={false}
                  className="flex items-center flex-col hover:text-primary"
                >
                  <Image
                    src="/assets/icons/user_icon.svg"
                    alt="user icon"
                    width={25}
                    height={25}
                    className="md:hidden"
                  />
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  scroll={false}
                  className="flex items-center flex-col hover:text-primary"
                >
                  <Image
                    src="/assets/icons/briefcase_icon.svg"
                    alt="user icon"
                    width={25}
                    height={25}
                    className="md:hidden"
                  />
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  scroll={false}
                  className="flex items-center flex-col hover:text-primary"
                >
                  <Image
                    src="/assets/icons/services_icon.svg"
                    alt="user icon"
                    width={25}
                    height={25}
                    className="md:hidden"
                  />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#portfolio"
                  scroll={false}
                  className="flex items-center flex-col hover:text-primary"
                >
                  <Image
                    src="/assets/icons/file_icon.svg"
                    alt="user icon"
                    width={25}
                    height={25}
                    className="md:hidden"
                  />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="flex items-center flex-col hover:text-primary"
                >
                  <Image
                    src="/assets/icons/blog_icon.svg"
                    alt="user icon"
                    width={25}
                    height={25}
                    className="md:hidden"
                  />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  scroll={false}
                  className="flex items-center flex-col hover:text-primary"
                >
                  <Image
                    src="/assets/icons/contact_icon.svg"
                    alt="user icon"
                    width={25}
                    height={25}
                    className="md:hidden"
                  />
                  Contact
                </Link>
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
            <button
              className="md:mt-2"
            >
              {renderThemeChanger()}
            </button>
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
        </nav>
      </header>
    </>
  );
}
