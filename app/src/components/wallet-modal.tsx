"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

interface WalletModalProps {
  isOpen: boolean
  onClose: () => void
}

const wallets = [
  {
    id: "sui",
    name: "SUI Wallet",
    icon: "/logo.png",
    available: true,
  },
  {
    id: "okx",
    name: "OKX Wallet",
    icon: "/logo.png",
    available: true,
  },
  {
    id: "stashed",
    name: "Stashed Wallet",
    icon: "/logo.png",
    available: true,
  },
  {
    id: "suiet",
    name: "SUIET Wallet",
    icon: "/logo.png",
    available: false,
    message: "Wallet not available for mobile devices",
  },
]

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-[#0a0e14] border border-[#7dd3fc]/20 rounded-3xl p-6 z-50"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Connect Wallet</h2>
              <p className="text-white/70">Please select a wallet to connect to the platform</p>
            </div>

            {/* Wallet list */}
            <div className="space-y-3">
              {wallets.map((wallet) => (
                <motion.button
                  key={wallet.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center p-4 rounded-xl border border-white/10 transition-colors ${
                    wallet.available
                      ? "bg-white/5 hover:bg-white/10 cursor-pointer"
                      : "bg-white/5 opacity-60 cursor-not-allowed"
                  }`}
                  disabled={!wallet.available}
                >
                  <Image
                    src={wallet.icon || "/placeholder.svg"}
                    alt={wallet.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="ml-3 text-left">
                    <p className="text-white font-medium">{wallet.name}</p>
                    {!wallet.available && <p className="text-[#7dd3fc] text-sm">{wallet.message}</p>}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

