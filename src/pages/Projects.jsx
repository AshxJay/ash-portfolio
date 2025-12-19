import { motion } from "framer-motion"
import { SiReact, SiPython, SiNodedotjs, SiMongodb } from "react-icons/si"

const projects = [
  {
    title: "FitPulse",
    icon: SiReact,
    subtitle: "Full-Stack Fitness Tracking Platform",
    description:
      "Full-stack fitness tracking app built with React (Vite) and Python. Generates personalized fitness and calorie insights based on user data.",
  },
  {
    title: "InvoiceCraft",
    icon: SiPython,
    subtitle: "Modern Invoice Generator",
    description:
      "Invoice generation platform with React frontend and Python backend, supporting tax calculation and PDF exports.",
  },
  {
    title: "Cloud Notes API",
    icon: SiNodedotjs,
    subtitle: "Secure REST API with CI/CD",
    description:
      "JWT-secured REST API using Node.js and Express, integrated with MongoDB Atlas and deployed via GitHub Actions and Vercel.",
  },
]

export default function Projects() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold mb-16"
      >
        Projects
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const Icon = project.icon

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className="text-xl text-gray-700" />
                <h2 className="text-lg font-semibold">
                  {project.title}
                </h2>
              </div>

              <p className="text-gray-500 text-sm mb-3">
                {project.subtitle}
              </p>

              <p className="text-gray-600 text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </main>
  )
}
