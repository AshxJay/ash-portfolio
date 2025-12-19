import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"

export default function CursorGlow() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const sx = useSpring(x, { stiffness: 150, damping: 20 })
  const sy = useSpring(y, { stiffness: 150, damping: 20 })

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 150)
      y.set(e.clientY - 150)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-purple-500/20 blur-3xl z-0"
    />
  )
}
