export function PresaleInfo() {
  return (
    <div className="space-y-8">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-4 text-center">
        <p className="text-lg text-white">
          Presale Price <span className="font-bold">1 SWHIT = 0.0005$</span>
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center text-white">
          <span>Total Supply</span>
          <span className="font-bold">500M $SWHIT Tokens</span>
        </div>

        <div className="flex justify-between items-center text-white">
          <span>Presale Allocation</span>
          <span className="font-bold">100M $SWHIT Tokens (20%)</span>
        </div>

        <div className="flex justify-between items-center text-white">
          <span>Presale Hardcap</span>
          <span className="font-bold">10,000 SUI</span>
        </div>

        <div className="flex justify-between items-center text-white">
          <span>Min. Buy Per User</span>
          <span className="font-bold">1 SUI</span>
        </div>

        <div className="flex justify-between items-center text-white">
          <span>Max. Buy Per User</span>
          <span className="font-bold">10,000 SUI</span>
        </div>

        <div className="flex justify-between items-center text-white">
          <span>SUI Raised</span>
          <span className="font-bold">0 SUI/$0</span>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2">
        <div className="bg-[#7dd3fc] h-2 rounded-full w-[0%]"></div>
      </div>
      <div className="text-right text-white font-bold">0%</div>
    </div>
  )
}

