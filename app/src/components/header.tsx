"use client"

import Image from "next/image"
import { ConnectButton } from "./connect-button"

export function Header() {
  return (
    <header className="relative z-50">
      <div className="flex justify-between items-center px-6 py-2 bg-[#0a0e14]/50 backdrop-blur-md border border-white/10 rounded-full mx-4 my-2">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="WheatChain Logo" width={28} height={28} />
          <h1 className="text-lg font-semibold text-white">WheatChain</h1>
        </div>

        <div className="ml-6">
          <ConnectButton />
        </div>
      </div>
    </header>
  )
}

