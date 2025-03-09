"use client"

import Image from "next/image"

export function Header() {
  return (
    <header className="relative z-50">
      {/* Main Header */}
      <div className="flex justify-between items-center px-6 py-2 bg-[#0a0e14]/50 backdrop-blur-md border border-white/10 rounded-full mx-4 my-2">
        {/* Left side - Logo and Brand */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="WheatChain Logo" width={28} height={28} />
          <h1 className="text-lg font-semibold text-white">WheatChain</h1>
        </div>

        {/* Right side - Connect Wallet Button (Added More Space) */}
        <div className="ml-6"> {/* Added left margin for spacing */}
          <button className="bg-white/10 hover:bg-white/15 text-white font-medium py-2 px-5 rounded-full border border-white/20 transition-colors text-sm">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  )
}