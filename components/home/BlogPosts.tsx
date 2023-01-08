import { useState } from 'react';
import { ServicesData } from './HomeDatas';
import { ArrowDownIcon, CalendarIcon } from '../common/svgIcons';
import Image from 'next/image';

export function BlogPosts() {
  const [modal, setModal] = useState(-1);

  return (
    <>
      <section
        id="blog"
        className="sm:container mx-auto px-2 md:px-10 lg:px-20 py-16 break-words"
        onClick={() => modal >= 0 && setModal(-1)}
      >
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">
              Latest Posts
            </h2>
            <p className="text-xl md:text-2xl">Here are my latest blog posts</p>
          </div>

          <div className="grid xss:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {ServicesData?.map((item, i) => (
              <div
                key={i}
                role="button"
                className="relative flex flex-col content-between break-words py-8 px-4 dark:bg-secondaryDark shadow-customBox rounded-xl transition-all"
              >
                <div className="mb-4">
                  <Image
                    src="/assets/abiye.jpg"
                    alt="author"
                    width={25}
                    height={25}
                    className="rounded-full shadow-customBox object-cover mb-3"
                  />
                  <h3 className="font-mono font-bold text-xl md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-xl">{item.subtitle}</p>
                  <p className="flex items-center gap-2 text-sm italic mt-2">
                    <CalendarIcon width="15" height="15" fill="#9932cc" />
                    29 days ago
                  </p>
                </div>

                <button
                  className="flex items-center md:text-lg mt-auto"
                  onClick={() => setModal(i)}
                >
                  Read
                  <span className="mt-1 rotate-[-90deg] hover:translate-x-1 transition-all">
                    <ArrowDownIcon width="20" height="20" fill="#9932cc" />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
