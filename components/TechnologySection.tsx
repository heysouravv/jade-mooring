'use client'

import { motion } from "framer-motion"
import Link from "next/link"

export default function TechnologySection() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <motion.section 
      className="py-24"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 leading-tight">
              Tech That Empowers Tomorrow's Defense
            </h2>
            <p className="text-base md:text-lg mb-6">
              At Jade Mooring, we build military technology that helps defense forces handle the toughest challenges. Our goal is to give soldiers the tools they need to stay safe and succeed in any situation.            
            </p>
            <p className="text-base md:text-lg">
              From systems that detect threats early to equipment that improves how soldiers operate in the field, we focus on practical solutions that work when it counts. Our engineers and military experts work together to create reliable and effective technology that is simple to use and strong enough to withstand real combat conditions.
            </p>
          </div>
          <div className="lg:w-1/2 lg:pl-8 lg:pt-[calc(2rem+5rem)]"> {/* Adjust this value as needed */}
            <p className="text-base md:text-lg mb-8">
              We understand the serious responsibility our clients place in us, and we are committed to delivering technology that ensures their safety and success.
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