import { motion, useMotionValue, useTransform } from "framer-motion"

const projects = [
  {
    title: "Cloud Notes API",
    desc: "JWT-secured REST API with MongoDB, Swagger, and CI/CD.",
  },
  {
    title: "Animated Portfolio",
    desc: "Modern React + Tailwind site with motion and micro-interactions.",
  },
  {
    title: "Auth System",
    desc: "Role-based auth with refresh tokens and protected routes.",
  },
]

function TiltCard({ children }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  return (
    <motion.div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        x.set(e.clientX - r.left - r.width / 2)
        y.set(e.clientY - r.top - r.height / 2)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.04 }}
      className="p-6 rounded-2xl bg-gray-900/70 border border-gray-800 backdrop-blur transform-gpu"
    >
      {children}
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">Projects</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <TiltCard>
                <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-gray-400">{p.desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
