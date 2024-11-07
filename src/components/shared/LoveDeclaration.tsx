import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

const LoveDeclaration = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleHeartClick = () => {
    setShowMessage(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section
      id="love-story"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-30" />
        <img
          src="/wife/IMG_1351.JPG"
          alt="Love Background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-white bg-opacity-90 p-8 shadow-2xl backdrop-blur-sm"
        >
          <AnimatePresence>
            {showMessage && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="shadow-text mb-6 text-4xl font-bold text-pink-500 md:text-6xl">
                  I Love You, Kanokwan!
                </h2>
                <p className="shadow-text mb-8 text-xl text-pink-600 md:text-2xl">
                  You make my heart skip a beat every day! ❤️
                </p>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.3,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="mb-8 flex justify-center space-x-4"
                >
                  {[...Array(5)].map((_, i) => (
                    <Heart
                      key={i}
                      className="h-8 w-8 text-pink-500 md:h-12 md:w-12"
                    />
                  ))}
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg italic text-pink-700 md:text-xl"
                >
                  "In a world full of change, you are my constant. I love you
                  more than words can express."
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
          {!showMessage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-8 text-2xl text-pink-600">
                Click the heart to reveal a special message
              </p>
              <motion.div
                className="mx-auto w-fit cursor-pointer text-7xl md:text-8xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                onClick={handleHeartClick}
              >
                <Heart className="size-14 fill-current text-pink-500" />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default LoveDeclaration;
