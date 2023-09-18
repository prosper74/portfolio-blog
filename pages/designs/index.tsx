import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { photos } from '../../components/common/helpers/constants';
import SEO from '../../components/Seo';

export default function Blog() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event: any, { photo, index }: any) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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
              <Gallery photos={photos} onClick={openLightbox} />
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={photos.map((x) => ({
                        ...x,
                        srcset: x.src,
                        caption: x.title,
                        width: x.width,
                        height: x.height,
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
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
