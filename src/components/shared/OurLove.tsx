import { motion } from "framer-motion";

const OurLove = () => {
  return (
    <section
      id="quotes"
      className="flex min-h-screen flex-col items-center justify-center bg-pink-50 p-8"
    >
      <h2 className="mb-8 text-3xl font-bold text-pink-500 md:text-5xl">
        Words of Love
      </h2>
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 rounded-lg bg-white p-6 text-center shadow-lg"
        >
          <p className="text-5xl italic text-pink-800">
            "In all the world, there is no heart for me like yours. In all the
            world, there is no love for you like mine."
          </p>
          <p className="mt-2 text-xl text-pink-500">- Maya Angelou</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg bg-white p-6 text-center shadow-lg"
        >
          <p className="text-5xl italic text-pink-800">
            "I love you not only for what you are, but for what I am when I am
            with you."
          </p>
          <p className="mt-2 text-xl text-pink-500">
            - Elizabeth Barrett Browning
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurLove;
