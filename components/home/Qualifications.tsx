import { useState } from 'react';
import Image from 'next/image';
import { PortfolioData } from './HomeDatas';
import {
  ArrowDownIcon,
  BagIcon,
  CloseIcon,
  GraduationCapIcon,
  LinkIcon,
} from '../common/svgIcons';

export function Qualifications() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <section
        id="portfolio"
        className="relative sm:container mx-auto px-2 md:px-10 lg:px-20 py-16 break-words"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-1">
            Qualifications
          </h2>
          <p className="text-xl md:text-2xl">My journey so far</p>
        </div>

        <div>
          <div className="flex items-center justify-evenly md:justify-center mb-4 font-semibold text-xl md:text-2xl">
            <button
              onClick={() => setIsActive(false)}
              className={`flex items-center md:mx-10 gap-2 transition-all
                ${!isActive && 'text-primary'}
              `}
            >
              <GraduationCapIcon
                width="30"
                height="30"
                fill={`${!isActive ? '#9932cc' : 'rgb(55 65 81)'}`}
              />
              Education
            </button>

            <button
              onClick={() => setIsActive(true)}
              className={`flex items-center md:mx-10 gap-2 transition-all
                ${isActive && 'text-primary'}
              `}
            >
              <BagIcon
                width="24"
                height="24"
                fill={`${isActive ? '#9932cc' : 'rgb(55 65 81)'}`}
              />{' '}
              Work
            </button>
          </div>

          <div className="grid xsss:grid-cols-107 md:grid-cols-105">
            <div
              className={`transition-all ${isActive ? 'h-0 overflow-hidden' : 'h-max mb-4'}`}
            >
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
