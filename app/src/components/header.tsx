"use client"

import Image from "next/image"
import { ConnectButton } from "@suiet/wallet-kit"

export function Header() {
  return (
    <header className="relative z-50">
      <div className="flex justify-between items-center px-8 py-4 bg-[#0a0e14]/50 backdrop-blur-md border border-white/10 rounded-full mx-4 my-4">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="WheatChain Logo" width={36} height={36} />
          <h1 className="text-xl font-bold text-white">WheatChain</h1>
        </div>
        <ConnectButton />
      </div>
    </header>
  )
}

