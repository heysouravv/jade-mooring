'use client'

import { motion } from "framer-motion"
import Hero from "./Hero"
import TechnologySection from "./TechnologySection"
import LatestProjectSection from "./LatestProjectSection"
import Footer from "./Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <main className="flex-grow flex flex-col">
        <Hero />
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          <TechnologySection />
          <LatestProjectSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}