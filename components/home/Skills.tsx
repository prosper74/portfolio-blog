import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { skillData } from '../common/helpers/constants';
import { ArrowDownIcon } from '../common/svgIcons';

export function Skills() {
  const [toggle, setToggle] = useState(0);

  return (
    <>
      <AnimatePresence>
        <section
          id="skills"
          className="sm:container mx-auto px-4 md:px-10 lg:px-20 py-16"
        >
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-1">
                My Technical Skills
              </h2>
              <p className="text-xl md:text-2xl">
                Here are the skills I have harnessed over the years
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {skillData?.map((skill, i) => (
                <div key={i} className="">
                  <div
                    role="button"
                    className="flex items-center"
                    onClick={() =>
                      toggle === i ? setToggle(-1) : setToggle(i)
                    }
                  >
                    {skill.icon}
                    <div className="ml-2">
                      <h3 className="text-xl md:text-2xl font-semibold">
                        {skill.name}
                      </h3>
                      <p className="font-mono text-lg">{skill.experience}</p>
                    </div>
                    <button
                      className={`ml-auto ease-linear duration-300 ${
                        toggle === i && 'rotate-[-180deg]'
                      }`}
                    >
                      <ArrowDownIcon width="30" height="30" fill="#9932cc" />
                    </button>
                  </div>

                  <motion.ul
                    className={`py-4 px-12 shadow-customBox rounded-xl opacity-100 translate-y-0 ease-in-out duration-5000 delay-3000 ${
                      toggle !== i && 'hidden opacity-0 translate-y-20'
                    }`}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: { duration: 5.5, ease: 'easeInOut' },
                    }}
                    exit={{
                      x: -100,
                      opacity: 0,
                      transition: { duration: 5.5, ease: 'easeInOut' },
                    }}
                  >
                    {skill.skills.map((item, i) => (
                      <li key={i}>{item.name}</li>
                    ))}
                  </motion.ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatePresence>
    </>
  );
}
