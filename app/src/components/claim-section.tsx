export function ClaimSection() {
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
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
            <p className="text-white/50">---</p>
          </div>
        </div>

        <button className="w-full bg-[#7dd3fc] hover:bg-[#7dd3fc]/90 text-[#0a0e14] font-semibold py-4 px-8 rounded-full transition-colors text-lg">
          Connect Wallet
        </button>
      </div>
    </div>
  )
}

