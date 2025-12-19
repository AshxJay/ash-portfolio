import { motion, useScroll, useTransform } from "framer-motion"
import MagneticButton from "./MagneticButton"

export default function Hero() {
  const { scrollY } = useScroll()
  const ySlow = useTransform(scrollY, [0, 300], [0, -50])
  const yFast = useTransform(scrollY, [0, 300], [0, -120])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y: ySlow }}
        className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl top-32 left-24"
      />
      <motion.div
        style={{ y: yFast }}
        className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-32 right-24"
      />

      <div className="relative z-10 max-w-4xl text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Engineering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            immersive
          </span>{" "}
          web experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg mb-10"
        >
          Full-stack developer blending performance, design, and motion.
        </motion.p>

        <div className="flex justify-center gap-6">
          <MagneticButton>View Projects</MagneticButton>
          <MagneticButton outline>Contact Me</MagneticButton>
        </div>
      </div>
    </section>
  )
}
