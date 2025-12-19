import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaDocker, FaGithub } from "react-icons/fa"
import { SiMongodb, SiTailwindcss } from "react-icons/si"

const skills = [
  FaReact,
  FaNodeJs,
  SiMongodb,
  SiTailwindcss,
  FaDocker,
  FaGithub,
]

export default function OrbitSkills() {
  return (
    <section
      id="skills"
      className="py-40 flex justify-center items-center"
    >
      <div className="relative w-[400px] h-[400px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-gray-900/80 border border-gray-700 flex items-center justify-center">
            My Stack
          </div>
        </div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          {skills.map((Icon, i) => {
            const angle = (360 / skills.length) * i
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${angle}deg) translate(170px) rotate(-${angle}deg)`,
                }}
              >
                <div className="w-14 h-14 bg-gray-800/80 border border-gray-700 rounded-xl flex items-center justify-center text-xl">
                  <Icon />
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
