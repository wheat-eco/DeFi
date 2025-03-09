"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Spinner() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer spinning ring */}
      <motion.div
        animate={{
          rotate: 360,
          transition: {
            duration: 2.5,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          },
        }}
        className="relative w-20 h-20"
      >
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="6"
            strokeDasharray="180 90"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Center Logo with pulse effect */}
      <motion.div
        className="absolute w-12 h-12 flex items-center justify-center"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Image src="/logo.jpg" alt="" width={48} height={48} className="rounded-full" />
      </motion.div>

      {/* Loading text with fade effect */}
      <motion.p
        className="absolute mt-28 text-white/80 text-sm font-medium"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        Loading...
      </motion.p>
    </div>
  )
}

