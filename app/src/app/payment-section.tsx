"use client"

import { useState } from "react"
import { useWallet, useAccountBalance } from "@suiet/wallet-kit"
import { useSuiProvider } from "@suiet/wallet-kit"
import { Transaction } from "@mysten/sui/transactions"
import { bcs } from "@mysten/sui/bcs"
export function PaymentSection() {
  const wallet = useWallet()
  const { balance } = useAccountBalance()
  const provider = useSuiProvider()
  const [amount, setAmount] = useState("")
  const [loading, setLoading] = useState(false)

  const handleMax = () => {
    if (balance) {
      setAmount(balance)
    }
  }

  const calculateTokens = (suiAmount: string) => {
    // 1 SUI = 2000 SWHIT (since 0.0005$ per SWHIT)
    const tokens = Number(suiAmount) * 2000
    return tokens.toFixed(2)
  }

  const handlePay = async () => {
    if (!wallet.connected || !amount) return

    try {
      setLoading(true)

      // Create transaction block
      const tx = new TransactionBlock()

      // Add your transaction logic here
      // This is a placeholder - you'll need to add the actual smart contract call
      tx.moveCall({
        target: `${process.env.NEXT_PUBLIC_PACKAGE_ID}::presale::buy`,
        arguments: [tx.pure(amount)],
      })

      // Execute transaction
      const response = await wallet.signAndExecuteTransactionBlock({
        transactionBlock: tx,
      })

      console.log("Transaction successful:", response)
    } catch (error) {
      console.error("Transaction failed:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6 mt-8">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-white text-lg">You Pay</span>
          <span className="text-white/60">Balance: {Number(balance).toFixed(4)} SUI</span>
        </div>

        <div className="bg-white rounded-xl p-4 flex items-center gap-4">
          <input
            type="number"
            placeholder="Enter amount in"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1 bg-transparent outline-none text-[#0a0e14] placeholder-gray-400"
          />
          <button onClick={handleMax} className="px-4 py-2 rounded-full border border-[#0a0e14] text-[#0a0e14] text-sm">
            Max
          </button>
          <div className="flex items-center gap-2 text-[#0a0e14]">
            Pay with
            <img src="/sui-icon.png" alt="SUI" className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <span className="text-white text-lg">SWHIT You Receive</span>
        <div className="bg-[#0a0e14] border border-white/10 rounded-xl p-4 flex items-center justify-between">
          <span className="text-white text-xl">{amount ? calculateTokens(amount) : "0.00"}</span>
          <img src="/logo.png" alt="SWHIT" className="w-6 h-6" />
        </div>
      </div>

      {wallet.connected ? (
        <button
          onClick={handlePay}
          disabled={loading || !amount}
          className="w-full bg-[#7dd3fc] hover:bg-[#7dd3fc]/90 disabled:opacity-50 
                   text-[#0a0e14] font-semibold py-4 px-8 rounded-full transition-colors"
        >
          {loading ? "Processing..." : "Pay"}
        </button>
      ) : (
        <button
          onClick={() => wallet.select()}
          className="w-full bg-[#7dd3fc] hover:bg-[#7dd3fc]/90 
                   text-[#0a0e14] font-semibold py-4 px-8 rounded-full transition-colors"
        >
          Connect Wallet
        </button>
      )}
    </div>
  )
}

