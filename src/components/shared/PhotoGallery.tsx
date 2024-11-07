import { useState } from "react";

const PhotoGallery = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showGallery, setShowGallery] = useState<boolean>(false);

  const photos = [
    "/wife/IMG_1345.JPG",
    "/wife/IMG_1347.JPG",
    "/wife/IMG_1348.JPG",
    "/wife/IMG_1349.JPG",
    "/wife/IMG_1350.JPG",
    "/wife/IMG_1351.JPG",
    "/wife/IMG_1352.JPG",
    "/wife/IMG_1353.JPG",
    "/wife/IMG_1436.JPG",
    "/wife/IMG_1437.JPG",
  ];

  return (
    <section
      id="gallery"
      className="flex min-h-screen flex-col items-center justify-center bg-pink-50 p-8"
    >
      <h2 className="mb-8 text-3xl font-bold text-pink-500 md:text-5xl">
        My Precious Woman
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {photos.map((photo, index) => (
          <div
            key={index}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
