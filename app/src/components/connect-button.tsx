"use client"

import { useState } from "react"
import { WalletModal } from "./wallet-modal"
import { motion } from "framer-motion"

export function ConnectButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white/10 hover:bg-white/15 text-white font-medium py-1.5 px-4 rounded-full border border-white/20 transition-colors text-xs whitespace-nowrap"
        onClick={() => setIsModalOpen(true)}
      >
        Connect Wallet
      </motion.button>

      <WalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

