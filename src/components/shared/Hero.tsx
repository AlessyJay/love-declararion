import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-30" />
        <img
          src="/wife/IMG_1347.JPG"
          alt="background"
          className="size-full object-cover"
        />
      </div>

      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-5xl font-bold text-white shadow-sm md:text-9xl"
        >
          Kanokwan & Peeranat
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 text-xl text-white shadow-sm md:text-6xl"
        >
          A love story written in the stars
        </motion.p>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mb-8 cursor-pointer text-8xl md:text-9xl"
        >
          <Heart className="fill-current text-pink-500 drop-shadow-lg" />
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-4 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <ChevronDown className="text-white" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
