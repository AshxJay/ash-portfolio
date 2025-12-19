import { useState } from "react"
import { motion } from "framer-motion"
import { SiMongodb, SiAmazon, SiNodedotjs } from "react-icons/si"

const skills = [
  {
    name: "MongoDB",
    icon: SiMongodb,
    description:
      "A document-oriented NoSQL database designed for flexibility, scalability, and modern application development.",
    details:
      "Experienced with schema design, aggregation pipelines, indexing strategies, and performance optimization.",
  },
  {
    name: "AWS",
    icon: SiAmazon,
    description:
      "Cloud platform for deploying, managing, and scaling production applications.",
    details:
      "Hands-on experience with EC2, S3, IAM, basic CI/CD pipelines, and deployment workflows.",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    description:
      "JavaScript runtime for building fast, scalable backend services.",
    details:
      "Built REST APIs, authentication systems, and asynchronous services using Express and middleware patterns.",
  },
]

export default function Skills() {
  const [active, setActive] = useState(null)

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-16"
      >
        Skills
      </motion.h1>

      {/* Skill Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {skills.map((skill, index) => {
          const Icon = skill.icon
          const isOpen = active === skill.name

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm cursor-pointer"
              onClick={() =>
                setActive(isOpen ? null : skill.name)
              }
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <Icon className="text-3xl text-gray-800" />
                <h2 className="text-xl font-semibold">
                  {skill.name}
                </h2>
              </div>

              {/* Short description */}
              <p className="text-gray-600">
                {skill.description}
              </p>

              {/* Expandable section */}
              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-500 mt-4">
                  {skill.details}
                </p>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </main>
  )
}
