"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle, AlertCircle, X } from "lucide-react"
import { useState, useEffect } from "react"

interface AlertProps {
  type: "success" | "error" | "info"
  message: string
  isOpen: boolean
  onClose: () => void
  autoClose?: boolean
  duration?: number
}

export function Alert({ type, message, isOpen, onClose, autoClose = true, duration = 5000 }: AlertProps) {
  const [shouldRender, setShouldRender] = useState(isOpen)

  useEffect(() => {
    setShouldRender(isOpen)

    if (autoClose && isOpen) {
      const timer = setTimeout(onClose, duration)
      return () => clearTimeout(timer)
    }
  }, [isOpen, autoClose, duration, onClose])

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-400" />,
    error: <XCircle className="w-5 h-5 text-red-400" />,
    info: <AlertCircle className="w-5 h-5 text-blue-400" />,
  }

  const colors = {
    success: "border-green-500/20 bg-green-500/10",
    error: "border-red-500/20 bg-red-500/10",
    info: "border-blue-500/20 bg-blue-500/10",
  }

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 z-50"
        >
          <div className={`rounded-lg border ${colors[type]} p-4 shadow-lg backdrop-blur-sm`}>
            <div className="flex items-start gap-3 pr-6">
              {icons[type]}
              <p className="text-sm text-white">{message}</p>
              <button onClick={onClose} className="absolute right-2 top-2 text-white/70 hover:text-white">
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

