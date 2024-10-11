'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  return (
    <motion.section 
      className="py-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="md:grid md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 leading-tight">
              Latest Projects
            </h2>
            <ul className="space-y-4">
              <li>
                <Button asChild variant="link" className="text-white hover:text-gray-300 p-0">
                  <Link href="/projects/quantum-encryption">
                    Quantum Encryption for Secure Communications
                  </Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-white hover:text-gray-300 p-0">
                  <Link href="/projects/ai-threat-detection">
                    AI-Powered Threat Detection System
                  </Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-white hover:text-gray-300 p-0">
                  <Link href="/projects/advanced-combat-suit">
                    Next-Generation Advanced Combat Suit
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-base md:text-lg mb-6">
              Our latest projects showcase the cutting-edge technology we're developing to address the most pressing challenges in modern defense and security.
            </p>
            <p className="text-base md:text-lg mb-6">
              From quantum encryption to AI-powered threat detection and advanced combat gear, we're constantly pushing the boundaries of what's possible in military technology.
            </p>
            <Button asChild variant="link" className="text-white hover:text-gray-300">
              <Link href="/projects">
                View All Projects
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  )
}