import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, percentage, icon: Icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm"
    >
      {/* Icon and Skill Name */}
      <div className="flex items-center gap-3 mb-4">
        {Icon && <Icon className="text-3xl text-gray-700" />}
        <h3 className="text-xl font-bold">{skill}</h3>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden mb-2">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="bg-neutral h-full rounded-full"
        />
      </div>

      {/* Percentage + Label */}
      <div className="text-right">
        <p className="text-lg font-semibold text-neutral">{percentage}%</p>
        <span className="text-sm text-gray-500">Proficiency</span>
      </div>
    </motion.div>
  );
};

export default SkillCard;
