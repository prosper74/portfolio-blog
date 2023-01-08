import { useState } from 'react';
import { QualificationsData } from './HomeDatas';
import { BagIcon, CalendarIcon, GraduationCapIcon } from '../common/svgIcons';

export function Qualifications() {
  const [isActive, setIsActive] = useState('education');

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
          <div className="flex items-center justify-evenly md:justify-center gap-2 mb-4 font-semibold text-lg md:text-xl">
            <button
              onClick={() => setIsActive('education')}
              className={`flex items-center gap-1 transition-all
                ${isActive === 'education' && 'text-primary'}
              `}
            >
              <GraduationCapIcon
                width="26"
                height="26"
                fill={`${
                  isActive === 'education' ? '#9932cc' : 'rgb(55 65 81)'
                }`}
              />
              Education
            </button>

            <button
              onClick={() => setIsActive('work')}
              className={`flex items-center md:mx-10 gap-1 transition-all
                ${isActive === 'work' && 'text-primary'}
              `}
            >
              <BagIcon
                width="20"
                height="20"
                fill={`${isActive === 'work' ? '#9932cc' : 'rgb(55 65 81)'}`}
              />{' '}
              Work
            </button>
          </div>

          <div className="grid xsss:grid-cols-105 md:grid-cols-107 justify-center">
            {QualificationsData.map((item, i) => (
              <div
                key={i}
                className={`transition-all h-0 overflow-hidden ${
                  isActive === item.type && 'h-max mb-4'
                }`}
              >
                {item.qualifications.map((qualification, i) => (
                  <div key={i} className="grid grid-cols-111 gap-6">
                    {i % 2 !== 0 && <div></div>}

                    {i % 2 !== 0 && (
                      <div>
                        <span className="inline-block w-3 h-3 bg-primary rounded-full"></span>
                        <span className="block w-[1px] h-full bg-primary translate-x-[6px] translate-y-[-7px]"></span>
                      </div>
                    )}
                    <div>
                      <h3 className="font-medium text-xl md:text-2xl">
                        {qualification.title}
                      </h3>
                      <span className="text-lg md:text-xl">
                        {qualification.subtitle}
                      </span>
                      <div className="flex items-center gap-2 text-sm">
                        <CalendarIcon width="15" height="15" fill="#9932cc" />
                        {qualification.date}
                      </div>
                    </div>
                    {i % 2 === 0 && (
                      <div>
                        <span className="inline-block w-3 h-3 bg-primary rounded-full"></span>
                        <span className="block w-[1px] h-full bg-primary translate-x-[6px] translate-y-[-7px]"></span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
