import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Adjust as needed
  });

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center">
      <AnimatePresence>
        {inView && (
          <motion.div
            key="section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedSection;
