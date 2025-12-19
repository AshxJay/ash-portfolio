import { motion, useMotionValue } from "framer-motion"

export default function MagneticButton({ children, outline }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  function move(e) {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.3)
    y.set((e.clientY - r.top - r.height / 2) * 0.3)
  }

  return (
    <motion.button
      onMouseMove={move}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{ x, y }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-3 rounded-xl font-medium ${
        outline
          ? "border border-gray-700"
          : "bg-white text-black"
      }`}
    >
      {children}
    </motion.button>
  )
}
