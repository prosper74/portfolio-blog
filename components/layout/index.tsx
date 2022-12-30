import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export default function Layout({ children }: any) {
  const [scrollup, setScrollup] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 120) {
      setScrollup(true);
    } else {
      setScrollup(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollup]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Header scrollup={scrollup} setScrollup={setScrollup} />
      {children}
      <Footer />
      <button onClick={() => handleScrollToTop()}>
        <Image
          src="/assets/icons/arrow_up_icon.svg"
          alt="Scroll to top icon"
          width={25}
          height={25}
          className={`fixed right-4 opacity-80 z-[500] transition-[5s] ${
            scrollup ? 'bottom-16' : 'bottom-[-100%]'
          }`}
        />
      </button>
    </>
  );
}
