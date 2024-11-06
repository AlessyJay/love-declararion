import { motion } from "framer-motion";
import { useState } from "react";

const PhotoGallery = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showGallery, setShowGallery] = useState<boolean>(false);

  const photos = [
    "/public/wife/IMG_1345.JPG",
    "/public/wife/IMG_1347.JPG",
    "/public/wife/IMG_1348.JPG",
    "/public/wife/IMG_1349.JPG",
    "/public/wife/IMG_1350.JPG",
    "/public/wife/IMG_1351.JPG",
    "/public/wife/IMG_1352.JPG",
    "/public/wife/IMG_1353.JPG",
    "/public/wife/IMG_1436.JPG",
    "/public/wife/IMG_1437.JPG",
  ];

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-white p-8">
      <h2 className="mb-8 text-3xl font-bold text-pink-500 md:text-5xl">
        Our Precious Moments
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            onClick={() => {
              setCurrentPhotoIndex(index);
              setShowGallery(true);
            }}
          >
            <img
              src={photo}
              alt={`Memory ${index + 1}`}
              className="h-40 w-full rounded-lg object-cover shadow-md"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
