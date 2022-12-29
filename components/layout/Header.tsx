import { useEffect, useState } from 'react';
import Head from 'next/head';

export function Header() {
  const [scrollup, setScrollup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeIcon, setThemeIcon] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScrollup(true);
    } else {
      setScrollup(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header
        className={`${
          scrollup && 'shadow-lg'
        } max-md:shadow-top fixed bottom-0 md:top-0 inset-x-0 w-full text-gray-700 font-medium bg-body z-[100]`}
      >
        {/* {scrollup ? 'header scroll' : 'header'} */}
        <nav className="flex justify-between items-center sm:container mx-auto px-4 md:px-10 lg:px-20 py-3">
          <a href="#home" className="text-primary text-2xl md:text-3xl">
            atuProsper.
          </a>
          <div className="flex gap-5">
            {/* .navMenu {
              position: fixed;
              bottom: -100%;
              left: 0;
              width: 100%;
              background-color: $bodyColor;
              padding: 2rem 1.5rem 4rem;
              box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
              border-radius: 1.5rem 1.5rem 0 0;
              transition: 0.5s;
              z-index: 20;
            } */}
            <div className="max-md:fixed max-md:bottom-[-100%] max-md:left-0 max-mdw-full max-md:bg-body max-md:shadow-top">
              {/* {'navMenu ' + (menuOpen && 'show__menu')} */}
              <ul className="flex gap-5" onClick={() => setMenuOpen(false)}>
                <li className="nav__item">
                  <a href="#about" className="navLink">
                    {/* <UilUser size="18" className="navIcon" />  */}
                    About
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#skills" className="navLink">
                    {/* <UilBriefcaseAlt size="18" className="navIcon" />  */}
                    Skills
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#services" className="navLink">
                    {/* <UilScenery size="18" className="navIcon" /> */}
                    Services
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#portfolio" className="navLink">
                    {/* <UilFileInfoAlt size="18" className="navIcon" />  */}
                    Projects
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#contact" className="navLink">
                    {/* <UilMessage size="18" className="navIcon" />  */}
                    Contact
                  </a>
                </li>
              </ul>
              <div className="md:hidden">X</div>
              {/* <UilTimes className="navClose" onClick={() => setMenuOpen(false)} /> */}
            </div>

            <div className="nav__btns">
              {/* {!menuOpen && ( */}
              <div className="navToggle">
                <div
                  className="changeTheme"
                  onClick={() => setThemeIcon(!themeIcon)}
                >
                  {themeIcon ? 'Sun icon' : 'moon icon'}
                </div>
                <div className="md:hidden">App icon</div>
                {/* <UilApps
                  className="navToggleIcon"
                  onClick={() => setMenuOpen(!menuOpen)}
                /> */}
              </div>
              {/* )} */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
