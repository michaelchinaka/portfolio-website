import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const guideSections = [
  {
    title: 'Fridge Contents Page',
    image: '/fridge-guide/image1-fridge.png',
    description: `On this page is a list of items that are in your fridge. Each item is clickable and on click the view of a fridge item can expand. In the bottom right corner is a button for adding an item to your list of Fridge items. Clicking it takes you to a page where you can search for a food item and add that item to your list of fridge items. Users can swipe left on an item to delete it from the list. Items in the fridge are stored in a database; details are retained even if a user closes the app and returns.`
  },
  {
    title: 'Expanded Fridge Item',
    image: '/fridge-guide/image2-expanded.png',
    description: `Once a fridge item has been clicked and expanded, its expanded details are shown. Purchase Date, Expiry Date, Quantity and Recurring purchase attributes can be set here. Once values are set, press the confirm button to save changes to the local database. The date values are set by clicking on the date value; a date picker will pop up as seen in the image. Quantity is an integer value that can be typed by the user. Recurring purchase is a toggle that indicates whether a user would like that item to automatically be added to the shopping list once it expires.`
  },
  {
    title: 'Date Picker',
    image: '/fridge-guide/image3-date.png',
    description: `The date picker allows users to set purchase and expiry dates for fridge items. Simply click on the date value to open the picker.`
  },
  {
    title: 'Search Item Page',
    image: '/fridge-guide/image4-search.png',
    description: `At the top of the page is a search bar where a user can search for a food item to add to the list of fridge items. After pressing enter, results will load and the user can simply click on the item they wish to add. A toast will be presented to show the item has been added. Users can add more items or press the back button to return to the fridge contents.`
  },
  {
    title: 'Expiring Soon Page',
    image: '/fridge-guide/image5-expiring.png',
    description: `On this page, the user is presented with a list of food items expiring in the next 3 days. The user can click on the checkbox or anywhere on the row to select or unselect the item. Once happy with their selection, they can press the "Generate Recipe" button to see recipe suggestions.`
  },
  {
    title: 'Recipe Results Page',
    image: '/fridge-guide/image6-results.png',
    description: `The user is presented with recipe results they can make. There's a name and image of the recipe, as well as the number of missed, used, and unused ingredients based on the user's selection. The user can go back to edit their selection or click on a recipe for more information.`
  },
  {
    title: 'Recipe Details Page',
    image: '/fridge-guide/image7-details.png',
    description: `This page provides a summary of the selected recipe, including ingredients and preparation steps. In the menu bar, there's a hamburger icon that takes the user to the clock app to set up a timer if needed.`
  },
  {
    title: 'Clock Feature',
    image: '/fridge-guide/image8-clock.png',
    description: `The clock feature allows users to set a timer while cooking, accessible from the recipe details page.`
  },
  {
    title: 'Settings Page',
    image: '/fridge-guide/image9-settings.png',
    description: `On this page, users can set permissions for the app, allow access to the clock app, and turn on notifications for expiring items.`
  },
  {
    title: 'Shopping List Page',
    image: '/fridge-guide/image10-shopping.png',
    description: `Here users have a view of items on their shopping list. They can tick the checkbox to mark an item as bought, add new items, or swipe left to delete. Expired items set as recurring in the fridge section are automatically added to this list. All items are stored in a database for persistence.`
  },
];

const SlideNavButton = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`absolute top-1/2 transform -translate-y-1/2 ${direction === 'left' ? 'left-2' : 'right-2'}
    w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center
    disabled:opacity-50 disabled:cursor-not-allowed z-10 transition-all duration-300
    hover:scale-110 shadow-lg backdrop-blur-sm`}
  >
    {direction === 'left' ? (
      <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-eerieBlack" />
    ) : (
      <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-eerieBlack" />
    )}
  </button>
);

const ImageLoader = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

const FridgeDemo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  // Preload all images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = guideSections.map((section) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = section.image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesPreloaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        // Still set as preloaded to not block the UI
        setImagesPreloaded(true);
      }
    };

    preloadImages();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === guideSections.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? guideSections.length - 1 : prev - 1));
  };

  return (
    <>
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-tech bg-cover bg-center bg-no-repeat" />
      <div className="fixed inset-0 bg-black/50 backdrop-blur-[1px]" />
      
      {/* Content Container */}
      <div className="relative min-h-screen w-full overflow-x-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubTextLight} text-center`}>
              User Guide
            </p>
            <h1 className={`${styles.sectionHeadTextLight} text-center mb-8 sm:mb-12`}>
              Fridge Management App.
            </h1>
          </motion.div>

          <div className="flex justify-center mb-8 sm:mb-12">
            <Link
              to="/"
              className="relative overflow-hidden group bg-white/10 backdrop-blur-sm
                       px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg border border-white/20
                       text-white font-medium text-base sm:text-lg transition-all duration-300
                       hover:bg-white/20 hover:border-white/40 hover:scale-[1.02]
                       active:scale-[0.98] flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Return to Portfolio
              </span>
            </Link>
          </div>

          <motion.div
            variants={fadeIn('up', 'spring', 0.3, 0.75)}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 
                     overflow-hidden max-w-3xl mx-auto"
          >
            <div className="relative">
              {/* Image Container */}
              <div className="relative bg-gray-100 flex justify-center items-center min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    className="w-full max-w-md mx-auto p-4"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageLoader
                      src={guideSections[currentIndex].image}
                      alt={guideSections[currentIndex].title}
                      className="w-full h-auto object-contain max-h-[60vh]"
                    />
                  </motion.div>
                </AnimatePresence>
                
                <SlideNavButton 
                  direction="left" 
                  onClick={prevSlide} 
                  disabled={!imagesPreloaded || currentIndex === 0}
                />
                <SlideNavButton 
                  direction="right" 
                  onClick={nextSlide} 
                  disabled={!imagesPreloaded || currentIndex === guideSections.length - 1}
                />
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-1.5 py-3 bg-white/50 backdrop-blur-sm">
                {guideSections.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 
                      ${idx === currentIndex 
                        ? 'bg-eerieBlack w-4' 
                        : 'bg-gray-300 hover:bg-gray-400'}`}
                    disabled={!imagesPreloaded}
                  />
                ))}
              </div>

              {/* Description Box */}
              <div className="p-4 sm:p-6 bg-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-eerieBlack text-center">
                      {guideSections[currentIndex].title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      {guideSections[currentIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Progress Text */}
          <div className="text-center mt-4 text-timberWolf font-beckman text-sm sm:text-base">
            {currentIndex + 1} / {guideSections.length}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(FridgeDemo, ""); 