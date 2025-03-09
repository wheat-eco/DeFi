"use client"

import type React from "react"

import { WalletProvider, AllDefaultWallets, defineStashedWallet } from "@suiet/wallet-kit"
import "@suiet/wallet-kit/style.css"
import "./suiet-wallet-custom.css"
import "./globals.css"
// Define Stashed Wallet with your app name
const stashedWalletConfig = defineStashedWallet({
  appName: "WheatChain",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <WalletProvider defaultWallets={[...AllDefaultWallets, stashedWalletConfig]}>{children}</WalletProvider>
      </body>
    </html>
  )
}
