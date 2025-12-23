import { useState } from "react"
import { motion } from "framer-motion"
import { SiAmazon } from "react-icons/si"
import { FaCertificate } from "react-icons/fa"

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    icon: SiAmazon,
    details: [
      "Foundational cloud certification",
      "AWS core services",
      "Cloud architecture basics",
      "Issued: 2025",
    ],
  },
  {
    title: "Project Management and Agile Fundamentals",
    icon: FaCertificate,
    details: [
      "Agile principles",
      "Scrum framework",
      "Sprint planning & execution",
      "Issued by Santander Academy",
    ],
  },
]

export default function Certifications() {
  const [open, setOpen] = useState(null)

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold mb-16"
      >
        Certifications
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert) => {
          const Icon = cert.icon
          const isOpen = open === cert.title

          return (
            <div
              key={cert.title}
              onClick={() =>
                setOpen(isOpen ? null : cert.title)
              }
              className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Icon className="text-xl text-gray-700" />
                <h2 className="text-lg font-semibold">
                  {cert.title}
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
                {cert.details.map((item) => (
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
