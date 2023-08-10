import { useState } from 'react';
import Image from 'next/image';
import { PortfolioData } from './HomeDatas';
import { ArrowDownIcon, CloseIcon, LinkIcon } from '../common/svgIcons';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

export function Portfolio() {
  const [modal, setModal] = useState(0);

  return (
    <>
      <section
        id="portfolio"
        className="relative sm:container mx-auto px-4 md:px-10 lg:px-20 py-16 break-words"
      >
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">Portfolio</h2>
            <p className="text-xl md:text-2xl">Here are some of my projects</p>
          </div>

          <div className="portfolio-container">
            <div>
              <Swiper
                effect={'coverflow'}
                loop={true}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"
              >
                {PortfolioData.map((d) => (
                  <SwiperSlide key={d.id}>
                    <div className="portfolioContent grid">
                      <div>
                        <Image
                          src={d.img}
                          alt="Project image"
                          loading="lazy"
                          width={300}
                          height={180}
                          className="w-[300px] h-[220px] rounded-xl justify-self-center object-cover"
                        />

                        <div>
                          <h3 className="font-bold text-xl md:text-2xl">
                            {d.title}
                          </h3>
                          <h4 className="font-medium text-lg md:text-xl">
                            {d.subtitle}
                          </h4>
                          <p className="text-md my-3">
                            {d.description.slice(0, 75)}...
                          </p>

                          <button
                            className="flex items-center md:text-lg mt-auto"
                            onClick={() => setModal(d.id)}
                          >
                            Read More
                            <span className="mt-1 rotate-[-90deg] hover:translate-x-1 transition-all">
                              <ArrowDownIcon
                                width="20"
                                height="20"
                                fill="#9932cc"
                              />
                            </span>
                          </button>
                        </div>
                      </div>

                      <div
                        className={`fixed inset-0 bg-overlay flex justify-center items-center px-1 z-[1000] transition-all ${
                          modal === d.id
                            ? 'visible opacity-100'
                            : 'invisible opacity-0'
                        }`}
                      >
                        <div className="bg-body dark:bg-secondary py-4 px-2 rounded-xl">
                          <div className="mb-4">
                            <p className={`text-md mb-2 max-h-[18.5rem] overflow-x-auto ${d.title === 'FLOWS' && 'max-h-[13.5rem]'}`}>{d.description}</p>

                            {d.title === 'FLOWS' && (
                              <>
                                <a
                                  href="/assets/cv/slide_deck.pdf"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="flex items-center gap-2 max-w-[10rem] p-2 font-medium text-body shadow-button rounded-lg ease-in-out duration-100 hover:translate-y-[0.25rem] mb-2"
                                >
                                  View SlideDeck
                                  <LinkIcon
                                    width={18}
                                    height={18}
                                    fill="#9932cc"
                                  />
                                </a>

                                <a
                                  href="https://www.youtube.com/watch?v=Oe_-EBB8SUI"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="flex items-center gap-2 max-w-[12rem] p-2 font-medium text-body shadow-button rounded-lg ease-in-out duration-100 hover:translate-y-[0.25rem]"
                                >
                                  Watch Presentation
                                  <LinkIcon
                                    width={18}
                                    height={18}
                                    fill="#9932cc"
                                  />
                                </a>
                              </>
                            )}
                          </div>

                          <div className="grid grid-cols-4 items-center gap-5">
                            <a
                              href={d.link}
                              target="_blank"
                              rel="noreferrer"
                              className="col-span-3 flex items-center justify-center gap-2 mt-auto py-2 px-2 font-medium text-body bg-primary hover:bg-secondary shadow-button rounded-lg ease-in-out duration-100 hover:translate-y-[0.25rem] max-w-full"
                            >
                              View Project
                              <LinkIcon width={18} height={18} fill="#9932cc" />
                            </a>

                            <button
                              className=" hover:rotate-[-90deg] transition-all ml-auto"
                              onClick={() => setModal(0)}
                            >
                              <CloseIcon
                                width="35"
                                height="35"
                                fill="#9932cc"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
