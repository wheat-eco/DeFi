"use client"

import Image from "next/image"

export function Spinner() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Spinning ring with wheat-inspired styling */}
      <svg
        className="animate-spin-slow"
        width="80"
        height="80"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
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

      {/* Center Logo */}
      <div className="absolute w-12 h-12 flex items-center justify-center">
        <Image
          src="/logo.jpg"
          alt=""
          width={48}
          height={48}
          className="opacity-90"
        />
      </div>

      {/* Loading Text */}
      <p className="absolute mt-28 text-white/80 text-sm font-medium">
        Loading...
      </p>

      {/* Animation Keyframe */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 2.5s linear infinite;
        }
      `}</style>
    </div>
  )
}