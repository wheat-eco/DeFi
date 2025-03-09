"use client"

import { useEffect, useRef } from "react"

export function GridTerrainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Grid settings
    const GRID_SIZE = 20
    const PERSPECTIVE = 500
    const GRID_WIDTH = 30
    const GRID_HEIGHT = 20

    // Create grid points with height values
    const grid: number[][] = []
    for (let y = 0; y < GRID_HEIGHT; y++) {
      grid[y] = []
      for (let x = 0; x < GRID_WIDTH; x++) {
        grid[y][x] = 0
      }
    }

    let time = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgb(5, 5, 15)")
      gradient.addColorStop(1, "rgb(10, 10, 30)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update grid heights based on time
      for (let y = 0; y < GRID_HEIGHT; y++) {
        for (let x = 0; x < GRID_WIDTH; x++) {
          grid[y][x] = Math.sin(x / 3 + time) * Math.cos(y / 2 + time) * 50
        }
      }

      // Draw grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
      ctx.lineWidth = 1

      // Center the grid
      const offsetX = canvas.width / 2 - (GRID_WIDTH * GRID_SIZE) / 2
      const offsetY = canvas.height / 2

      // Draw horizontal lines
      for (let y = 0; y < GRID_HEIGHT; y++) {
        ctx.beginPath()
        for (let x = 0; x < GRID_WIDTH; x++) {
          const height = grid[y][x]

          // Apply perspective
          const scale = PERSPECTIVE / (PERSPECTIVE + y * GRID_SIZE + height)
          const screenX = offsetX + x * GRID_SIZE * scale
          const screenY = offsetY - height * scale + y * GRID_SIZE * scale

          if (x === 0) {
            ctx.moveTo(screenX, screenY)
          } else {
            ctx.lineTo(screenX, screenY)
          }
        }
        ctx.stroke()
      }

      // Draw vertical lines
      for (let x = 0; x < GRID_WIDTH; x++) {
        ctx.beginPath()
        for (let y = 0; y < GRID_HEIGHT; y++) {
          const height = grid[y][x]

          // Apply perspective
          const scale = PERSPECTIVE / (PERSPECTIVE + y * GRID_SIZE + height)
          const screenX = offsetX + x * GRID_SIZE * scale
          const screenY = offsetY - height * scale + y * GRID_SIZE * scale

          if (y === 0) {
            ctx.moveTo(screenX, screenY)
          } else {
            ctx.lineTo(screenX, screenY)
          }
        }
        ctx.stroke()
      }

      time += 0.02
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
}

