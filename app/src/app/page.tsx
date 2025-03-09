"use client"

import { GridTerrainBackground } from "@/components/grid-terrain-background"
import { Header } from "@/components/header"
import { CountdownTimer } from "@/components/countdown-timer"
import { ClaimSection } from "@/components/claim-section"
import { useState, useEffect } from "react"
import { Spinner } from "@/components/spinner"

export default function ClaimPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#0a0e14]">
        <Spinner />
      </div>
    )
  }

  return (
    <main className="min-h-screen relative">
      <GridTerrainBackground />
      <div className="relative z-10">
        <Header />
        <div className="container mx-auto px-4 py-8 max-w-lg">
          <ClaimSection />
          <div className="text-center mt-8 space-y-2">
            <p className="text-white/70">Claiming will be available in:</p>
            <CountdownTimer endTime={new Date("2025-04-01T00:00:00").getTime()} />
          </div>
          <div className="mt-8 text-center space-y-4">
            <a href="#" className="text-[#7dd3fc] hover:underline block">
              How to Buy
            </a>
            <p className="text-white">
              Need help?{" "}
              <a href="#" className="text-[#7dd3fc] hover:underline">
                Click here
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

