import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Footer } from './Footer';
import { Header } from './Header';
import { pageVariants } from '../common/helpers/animationVariants';

export default function Layout({ children }: any) {
  const [scrollup, setScrollup] = useState(false);
  const [scrollBottom, setScrollBottom] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 120) {
      setScrollup(true);
    } else {
      setScrollup(false);
    }

    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - 2
    ) {
      setScrollBottom(true);
    } else {
      setScrollBottom(false);
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
      <Header />

      <motion.main
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.main>

      <Footer />

      <button onClick={() => handleScrollToTop()}>
        <Image
          src="/assets/icons/arrow_up_icon.svg"
          alt="Scroll to top icon"
          width={25}
          height={25}
          className={`fixed right-4 opacity-80 z-[500] transition-[5s] ${
            scrollup ? 'bottom-16' : 'bottom-[-100%]'
          } ${scrollBottom && 'bottom-[-100%]'}`}
        />
      </button>
    </>
  );
}
