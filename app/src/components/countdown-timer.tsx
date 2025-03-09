"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  endTime: number
}

export function CountdownTimer({ endTime }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endTime - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [endTime])

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <div className="flex justify-center gap-4">
      {timeUnits.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 w-20"
        >
          <span className="text-2xl font-bold text-white">{unit.value.toString().padStart(2, "0")}</span>
          <span className="text-xs text-white/70">{unit.label}</span>
        </div>
      ))}
    </div>
  )
}

