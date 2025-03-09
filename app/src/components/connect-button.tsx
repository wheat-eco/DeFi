"use client"

import { useState } from "react"
import { WalletModal } from "./wallet-modal"
import { motion } from "framer-motion"
import { ConnectSpinner } from "./connect-spinner"
import { Alert } from "./alert"

interface ConnectButtonProps {
  variant?: "default" | "large"
  className?: string
}

export function ConnectButton({ variant = "default", className = "" }: ConnectButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState<"success" | "error">("success")

  const handleWalletSelect = async (walletId: string) => {
    setIsModalOpen(false)
    setIsConnecting(true)

    try {
      // Simulate connection delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate success (80% chance) or error
      if (Math.random() > 0.2) {
        setAlertType("success")
        setShowAlert(true)
      } else {
        throw new Error("Failed to connect wallet")
      }
    } catch (error) {
      setAlertType("error")
      setShowAlert(true)
    } finally {
      setIsConnecting(false)
    }
  }

  const buttonStyles = {
    default:
      "bg-white/10 hover:bg-white/15 text-white font-medium py-1.5 px-4 rounded-full border border-white/20 transition-colors text-xs whitespace-nowrap",
    large:
      "w-full bg-[#7dd3fc] hover:bg-[#7dd3fc]/90 text-[#0a0e14] font-semibold py-4 px-8 rounded-full transition-colors text-lg",
  }

  return (
    <>
      <motion.button
        whileHover={{ scale: variant === "default" ? 1.02 : 1 }}
        whileTap={{ scale: variant === "default" ? 0.98 : 0.98 }}
        className={`${buttonStyles[variant]} ${className}`}
        onClick={() => setIsModalOpen(true)}
        disabled={isConnecting}
      >
        {isConnecting ? (
          <div className="flex items-center justify-center gap-2">
            <ConnectSpinner />
            <span>Connecting...</span>
          </div>
        ) : (
          "Connect Wallet"
        )}
      </motion.button>

      <WalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSelect={handleWalletSelect} />

      <Alert
        type={alertType}
        message={alertType === "success" ? "Wallet connected successfully!" : "Failed to connect wallet"}
        isOpen={showAlert}
        onClose={() => setShowAlert(false)}
      />
    </>
  )
}

