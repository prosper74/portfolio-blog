import { useState } from 'react';
import { ServicesData } from './HomeDatas';
import { ArrowDownIcon, CheckIcon, CloseIcon } from '../common/svgIcons';

export function Services() {
  const [modal, setModal] = useState(-1);

  return (
    <>
      <section
        id="services"
        className="sm:container mx-auto px-4 md:px-10 lg:px-20 py-16 break-words"
        onClick={() => modal >= 0 && setModal(-1)}
      >
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">My Services</h2>
            <p className="text-xl md:text-2xl">
              Here are the major services I can offer you
            </p>
          </div>

          <div className="grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {ServicesData?.map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col content-between py-8 px-4 dark:bg-secondaryDark shadow-customBox rounded-xl transition-all"
              >
                <div className="mb-4">
                  {item.icon}
                  <h3 className="font-mono font-bold text-xl md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-xl">{item.subtitle}</p>
                </div>

                <button
                  className="flex items-center md:text-lg mt-auto"
                  onClick={() => setModal(i)}
                >
                  View More
                  <span className="mt-1 rotate-[-90deg] hover:translate-x-1 transition-all">
                    <ArrowDownIcon width="20" height="20" fill="#9932cc" />
                  </span>
                </button>

                <div
                  className={`fixed inset-0 bg-overlay flex justify-center items-center px-4 z-[150] transition-all ${
                    modal === i ? 'visible opacity-100' : 'invisible opacity-0'
                  }`}
                >
                  <div className="relative bg-body dark:bg-secondary p-6 rounded-xl">
                    <div className="mb-4">
                      <h3 className="font-bold text-xl md:text-3xl">
                        {item.title}
                      </h3>
                      <p className="text-lg md:text-xl">{item.description}</p>
                    </div>

                    <ul className="space-y-2">
                      {item.services.map(({ service, id }) => (
                        <li
                          key={id}
                          className="flex items-center text-lg md:text-xl"
                        >
                          <span className="mr-1">
                            <CheckIcon width="18" height="18" fill="#9932cc" />
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
