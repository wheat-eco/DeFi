"use client"

import { GridTerrainBackground } from "@/components/grid-terrain-background"
import { Header } from "@/components/header"
import { PresaleInfo } from "@/components/presale-info"
import { PaymentSection } from "@/components/payment-section"
import { useState, useEffect } from "react"
import { Spinner } from "@/components/spinner"
import { useWallet } from "@suiet/wallet-kit"

export default function PresalePage() {
  const [loading, setLoading] = useState(true)
  const wallet = useWallet()

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
          <PresaleInfo />
          <PaymentSection />
          <div className="mt-8 space-y-4 text-center">
            <a href="#" className="text-[#7dd3fc] hover:underline block">
              How to Buy
            </a>
            <p className="text-white">
              Need help?{" "}
              <a href="#" className="text-[#7dd3fc] hover:underline">
                Click here
              </a>
            </p>
            <div className="flex flex-col gap-4 mt-6">
              <a
                href="/claim"
                className="bg-[#7dd3fc] text-[#0a0e14] font-medium py-4 px-8 rounded-full flex items-center justify-center gap-2"
              >
                Claim Token
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-transparent border border-white/10 text-white font-medium py-4 px-8 rounded-full flex items-center justify-center gap-2"
              >
                Litepaper
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

