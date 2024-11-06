import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const buttonNav = [
    { id: "1", scrollSection: "hero", title: "Home" },
    { id: "2", scrollSection: "love-story", title: "Our Story" },
    { id: "3", scrollSection: "gallery", title: "Gallery" },
    { id: "4", scrollSection: "quotes", title: "Love Quotes" },
  ];

  return (
    <nav className="sticky left-0 right-0 top-0 z-50 border-b bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex shrink-0 items-center">
              <Heart className="size-8 text-pink-500" />
              <span className="ml-2 text-4xl font-bold text-pink-500">
                Kanokwan & Peeranat
              </span>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            {buttonNav.map((item) => (
              <button
                key={item.id}
                className="rounded-md px-3 py-2 text-2xl font-medium text-pink-500 hover:bg-pink-100"
                onClick={() => scrollToSection(`${item.scrollSection}`)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="flex items-center md:hidden">
            <button
              className="text-pink-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white md:hidden"
          >
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {buttonNav.map((item) => (
                <button
                  key={item.id}
                  className="rounded-md px-3 py-2 text-sm font-medium text-pink-500 hover:bg-pink-100"
                  onClick={() => scrollToSection(`${item.scrollSection}`)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
