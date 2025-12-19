import { motion } from "framer-motion"
import { SiAmazon } from "react-icons/si"
import { FaCertificate } from "react-icons/fa"

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2025",
    icon: SiAmazon,
  },
  {
    title: "Project Management and Agile Fundamentals",
    issuer: "Santander Academy",
    year: "",
    icon: FaCertificate,
  },
]

export default function Certifications() {
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

      <div className="space-y-6">
        {certifications.map((cert, index) => {
          const Icon = cert.icon

          return (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm flex items-start gap-4"
            >
              <Icon className="text-2xl text-gray-700 mt-1" />

              <div>
                <h2 className="text-lg font-semibold">
                  {cert.title}
                </h2>
                <p className="text-gray-600">
                  {cert.issuer}
                  {cert.year && ` • ${cert.year}`}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </main>
  )
}
