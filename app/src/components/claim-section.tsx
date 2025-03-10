"use client"

import { useWallet } from "@suiet/wallet-kit"
import { ConnectButton } from "@suiet/wallet-kit"

function truncateAddress(address: string) {
  if (!address) return ""
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function ClaimSection() {
  const wallet = useWallet()

  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold text-white">Claim Token Allocation</h1>
      <p className="text-xl text-gray-400">
        Engage in the next evolution of DeFi with WheatChain – Earn, Stake & Trade seamlessly on Sui!
      </p>

      <div className="mt-16 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-white">Your Allocation</h2>
          <div className="h-1 w-16 bg-white/20 mx-auto rounded-full"></div>
        </div>

        <div className="text-3xl font-bold text-[#7dd3fc]">$SWHIT</div>

        <div className="space-y-2">
          <p className="text-gray-400">Wallet Address</p>
          <div className="bg-[#0a0e14] backdrop-blur-sm border border-white/10 rounded-xl p-4">
            <p className="wallet-address text-white/50 font-mono">
              {wallet.account ? truncateAddress(wallet.account.address) : "---"}
            </p>
          </div>
        </div>

        {!wallet.connected && (
          <div className="flex justify-center">
            <ConnectButton />
          </div>
        )}
      </div>
    </div>
  )
}

