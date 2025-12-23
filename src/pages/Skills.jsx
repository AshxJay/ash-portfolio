import { useState } from "react"
import { motion } from "framer-motion"
import { SiNodedotjs, SiAmazon, SiGit } from "react-icons/si"
import { FaProjectDiagram } from "react-icons/fa"

const skills = [
  {
    title: "Backend & APIs",
    icon: SiNodedotjs,
    items: [
      "JavaScript (Node.js)",
      "Express.js",
      "RESTful API Design",
    ],
  },
  {
    title: "DevOps & CI/CD",
    icon: SiAmazon,
    items: [
      "CI/CD Pipelines",
      "Automated Deployment",
      "JWT Authentication",
      "ESLint",
      "EVM",
    ],
  },
  {
    title: "Tools",
    icon: SiGit,
    items: [
      "VS Code",
      "Git",
      "GitHub",
      "Vercel",
      "MongoDB Atlas",
      "Postman",
      "AWS Console",
    ],
  },
  {
    title: "Management Skills",
    icon: FaProjectDiagram,
    items: [
      "Agile Methodology",
      "Scrum Framework",
      "Sprint Planning",
    ],
  },
]

export default function Skills() {
  const [open, setOpen] = useState(null)

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold mb-16"
      >
        Skills
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => {
          const Icon = skill.icon
          const isOpen = open === skill.title

          return (
            <div
              key={skill.title}
              onClick={() =>
                setOpen(isOpen ? null : skill.title)
              }
              className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Icon className="text-xl text-gray-700" />
                <h2 className="text-lg font-semibold">
                  {skill.title}
                </h2>
              </div>

              <motion.ul
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4 space-y-2"
              >
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600">
                    • {item}
                  </li>
                ))}
              </motion.ul>
            </div>
          )
        })}
      </div>
    </main>
  )
}
