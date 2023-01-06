import { useState } from 'react';
import { PortfolioData } from './HomeDatas';
// import { ArrowDownIcon, CheckIcon, CloseIcon } from '../common/svgIcons';

export function Portfolio() {
  const [modal, setModal] = useState(-1);

  return (
    <>
      <section
        id="portfolio"
        className="sm:container mx-auto px-2 md:px-10 lg:px-20 py-16 break-words"
        onClick={() => modal >= 0 && setModal(-1)}
      >
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">Portfolio</h2>
            <p className="text-xl md:text-2xl">Here are some of my projects</p>
          </div>

          <div className="swiper-container"></div>
        </div>
      </section>
    </>
  );
}
