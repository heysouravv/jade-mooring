'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const letterAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
  }

  return (
    <motion.section 
      className="h-screen flex items-center"
      initial="initial"
      animate="animate"
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
          {isLoaded && (
            <>
              <motion.span className="inline-block" variants={letterAnimation}>J</motion.span>
              <motion.span className="inline-block" variants={letterAnimation}>A</motion.span>
              <motion.span className="inline-block" variants={letterAnimation}>D</motion.span>
              <motion.span className="inline-block" variants={letterAnimation}>E</motion.span>
              <br />
              <motion.span className="inline-block" variants={letterAnimation}>M</motion.span>
              <motion.span className="inline-block" variants={letterAnimation}>O</motion.span>
              <motion.span className="inline-block" variants={letterAnimation}>O</motion.span>
              <motion.span className="inline-block" variants={letterAnimation}>R</motion.span>
              <motion.span className="inline-block" variants={letterAnimation}>I</motion.span>
              <motion.span className="inline-block" variants={letterAnimation}>N</motion.span>
              <motion.span className="inline-block" variants={letterAnimation}>G</motion.span>
            </>
          )}
        </h1>
      </div>
    </motion.section>
  )
}