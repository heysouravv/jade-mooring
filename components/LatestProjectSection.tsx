'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function LatestProjectSection() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      className="py-24"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 leading-tight">
          Latest Project
        </h2>
        <div className="md:grid md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">SIERRA</h3>
            <p className="text-base md:text-lg mb-6">
              Swarm Intelligence for Environmental Reconnaissance and Research
              Assessment (SIERRA) is an advanced simulation project modeling
              drone swarms for forest mapping. It demonstrates efficient tree
              categorization using autonomous exploration and collective
              behavior.
            </p>
            <Link
              href="/projects/sierra"
              className="text-base text-white hover:text-gray-300 transition-colors duration-300 underline"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}