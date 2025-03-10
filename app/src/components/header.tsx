"use client"

import Image from "next/image"
import { useWallet, ConnectButton } from "@suiet/wallet-kit"
import { ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"

function truncateAddress(address: string) {
  if (!address) return ""
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function Header() {
  const wallet = useWallet()
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="relative z-50">
      <div className="flex justify-between items-center px-8 py-4 bg-[#0a0e14]/50 backdrop-blur-md border border-white/10 rounded-full mx-4 my-4">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="WheatChain Logo" width={36} height={36} />
          <h1 className="text-xl font-bold text-white">WheatChain</h1>
        </div>

        <div className="header-wallet relative" ref={dropdownRef}>
          {/* Hidden original connect button for functionality */}
          <div className="hidden">
            <ConnectButton />
          </div>

          {wallet.connected ? (
            <>
              <button className="wallet-button" onClick={() => setShowDropdown(!showDropdown)}>
                <Image src="/sui-logo.png" alt="Sui" width={20} height={20} className="rounded-full" />
                <span className="text-white/90 text-sm">{truncateAddress(wallet.account?.address || "")}</span>
                <ChevronDown
                  className={`w-4 h-4 text-white/60 transition-transform ${showDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {showDropdown && (
                <div className="wallet-dropdown">
                  <button
                    className="disconnect-button"
                    onClick={() => {
                      wallet.disconnect()
                      setShowDropdown(false)
                    }}
                  >
                    Disconnect
                  </button>
                </div>
              )}
            </>
          ) : (
            <button className="wallet-button" onClick={() => wallet.select()}>
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

