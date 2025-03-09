"use client"

import Image from "next/image"

export function Header() {
  return (
    <header className="relative z-50">
      <div className="flex justify-between items-center px-6 py-2 bg-[#0a0e14]/50 backdrop-blur-md border border-white/10 rounded-full mx-4 my-2">
        {/* Logo with Brand Name (Single Image) */}
        <Image src="/wheatchain.png" alt="WheatChain" width={160} height={40} />

        {/* Adjusted Connect Wallet Button */}
        <button className="bg-white/10 hover:bg-white/15 text-white font-medium py-2 px-5 rounded-full border border-white/20 transition-colors text-sm">
          Connect Wallet
        </button>
      </div>
    </header>
  )
}