import { motion } from 'framer-motion';
import SEO from '../components/Seo';

export default function Home() {
  return (
    <>
      <SEO
        pageTitle="Blog | Let's learn together"
        pageDescription="This is my personal portfolio and blog. Feel at home as we build together"
      />

      <main>
        <motion.div
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            type: 'spring',
            stiffness: 120,
          }}
          className="text-xl md:text-2xl mt-4"
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            beatae, pariatur esse unde blanditiis saepe soluta consequuntur
            dicta cum, totam aliquid quibusdam. Tempore consequatur iusto
            consectetur, illo odio porro cumque!
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            beatae, pariatur esse unde blanditiis saepe soluta consequuntur
            dicta cum, totam aliquid quibusdam. Tempore consequatur iusto
            consectetur, illo odio porro cumque!
          </p>
        </motion.div>
      </main>
    </>
  );
}
