import Image from 'next/image';
import Link from 'next/link';
import { TestimonialData } from './HomeDatas';
import { ArrowDownIcon, CalendarIcon, CloseIcon } from '../common/svgIcons';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export function Testimonials() {
  return (
    <>
      <section
        id="blog"
        className="sm:container mx-auto px-2 md:px-10 lg:px-20 py-16 break-words testimonials"
      >
        <div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">
              Testimonials
            </h2>
            <p className="text-xl md:text-2xl mb-12">
              What my clients and employers are saying about me{' '}
            </p>
          </div>

          <div>
            <Swiper
              slidesPerView={3}
              spaceBetween={15}
              loop={true}
              navigation={false}
              className="mySwiper"
            >
              {/* Render sliders. the source data is from the data.js file */}
              {TestimonialData.map((d) => (
                <SwiperSlide key={d.id}>
                  <div>
                    <div className="flex flex-col justify-evenly mb-4">
                      <div className="flex justify-between items-center mb-3">
                        {/* testimonial image  */}
                        <div className="flex items-center gap-2">
                          <Image
                            src={d.img}
                            alt={d.name}
                            width={60}
                            height={60}
                            className="rounded-full object-cover mr-3"
                          />
                        </div>

                        {/* the star icons  */}
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((_, i) => (
                            <CloseIcon
                              key={i}
                              width="15"
                              height="15"
                              fill="#9932cc"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h3 className="font-mono font-semibold text-xl">
                          {d.name}
                        </h3>
                        <p className="font-semibold text-sm">{d.designation}</p>
                      </div>

                      <p className="mb-6">{d.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
