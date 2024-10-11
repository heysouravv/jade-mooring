'use client'

import { motion } from "framer-motion"
import Link from "next/link"

export default function TechnologySection() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <motion.section 
      className="py-24"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <div className="container mx-auto px-4">
        <div className="md:grid md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 leading-tight">
              Advanced Military Technology
            </h2>
            <p className="text-base md:text-lg mb-6">
              At Jade Mooring, we are at the forefront of military technology innovation. Our cutting-edge solutions empower defense forces worldwide, ensuring a secure future in an ever-evolving global landscape.
            </p>
            <p className="text-base md:text-lg mb-6">
              From advanced AI-driven threat detection systems to next-generation combat gear, we're committed to pushing the boundaries of what's possible in defense technology.
            </p>
          </div>
          <div>
            <p className="text-base md:text-lg mb-8">
              Our team of expert engineers and strategists work tirelessly to develop state-of-the-art systems that provide unparalleled advantages in the field. We understand the critical nature of our work and the trust placed in us by our clients.
            </p>
            <Link href="/solutions" className="text-base text-white hover:text-gray-300 transition-colors duration-300 underline">
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  )
}