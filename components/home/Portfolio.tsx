import { useState } from 'react';
import Image from 'next/image';
import { PortfolioData } from './HomeDatas';
// import { ArrowDownIcon, CheckIcon, CloseIcon } from '../common/svgIcons';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import { ArrowDownIcon, CloseIcon, ForwardArrow } from '../common/svgIcons';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

export function Portfolio() {
  const [modal, setModal] = useState(0);

  return (
    <>
      <section
        id="portfolio"
        className="sm:container mx-auto px-2 md:px-10 lg:px-20 py-16 break-words"
        onClick={() => modal >= 0 && setModal(0)}
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
                          <h4 className="font-medium text-lg md:text-xl mb-4">
                            {d.subtitle}
                          </h4>

                          {/* This is the project description  */}
                          <p className="text-md mb-3">
                            {d.description.slice(0, 70)}...
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

                          {/* <button className="flex items-center justify-center mt-auto py-2 px-[10px] font-medium text-body bg-primary hover:bg-secondary shadow-button rounded-lg ease-in-out duration-100 hover:translate-y-[0.25rem] max-w-[210px]">
                            Read More
                            <ForwardArrow
                              width={18}
                              height={18}
                              fill="#9932cc"
                            />
                          </button> */}

                          {/* <a
                            href={d.link}
                            target="_blank"
                            rel="noreferrer"
                            className="portfolioButton"
                          >
                            View
                          </a> */}
                        </div>
                      </div>

                      <div
                        className={`fixed inset-0 bg-overlay flex justify-center items-center px-4 z-[150] transition-all ${
                          modal === d.id
                            ? 'visible opacity-100'
                            : 'invisible opacity-0'
                        }`}
                      >
                        <div className="relative bg-body dark:bg-secondary p-6 rounded-xl">
                          <div className="mb-4">
                            <h3 className="font-bold text-xl md:text-3xl">
                              {item.title}
                            </h3>
                            <p className="text-lg md:text-xl">
                              {item.description}
                            </p>
                          </div>

                          <ul className="space-y-2">
                            {item.services.map(({ service, id }) => (
                              <li
                                key={id}
                                className="flex items-center text-lg md:text-xl"
                              >
                                <span className="mr-1">
                                  <CheckIcon
                                    width="18"
                                    height="18"
                                    fill="#9932cc"
                                  />
                                </span>
                                {service}
                              </li>
                            ))}
                          </ul>

                          <button
                            className="absolute top-4 right-4 hover:rotate-[-90deg] transition-all"
                            onClick={() => setModal(-1)}
                          >
                            <CloseIcon width="35" height="35" fill="#9932cc" />
                          </button>
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
