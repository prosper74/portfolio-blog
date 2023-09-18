import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { photos } from '../../components/common/helpers/constants';
import SEO from '../../components/Seo';

import PhotoAlbum from 'react-photo-album';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

export default function Blog() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <SEO
        pageTitle="Designs | Checkout my designs"
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
          className="sm:container mx-auto px-4 md:px-10 lg:px-20 py-6 md:py-16"
        >
          <div>
            <div className="text-center">
              <h2 className="text-4xl md:text-7xl font-bold md:mt-12">
                Graphic Designs
              </h2>
              <p className="text-xl md:text-2xl">
                I started my career as a Graphics designer. Here are some of my
                designs
              </p>
            </div>

            <div className="my-8">
              <PhotoAlbum
                photos={photos}
                layout="rows"
                targetRowHeight={250}
                onClick={({ index }) => setIndex(index)}
              />
              <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
              />
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/posts`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const allPosts = await res.json();

//   return {
//     props: { allPosts: allPosts.data },
//   };
// }
