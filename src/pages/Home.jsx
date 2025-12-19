import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import profile from "../assets/profile.jpg"

export default function Home() {
  return (
    <main className="relative max-w-7xl mx-auto px-6 py-24 overflow-hidden">

      {/* Top / Mid Doodles */}
      <div className="absolute top-16 left-12 w-28 h-28 rounded-full border border-gray-400 opacity-70" />
      <div className="absolute top-1/3 right-24 w-10 h-10 rotate-12 border border-gray-400 opacity-70" />
      <div className="absolute top-1/2 left-1/2 w-1 h-16 bg-gray-300 rotate-45 opacity-70" />

      {/* Bottom Doodles */}
      <div className="absolute bottom-24 left-12 w-32 h-px bg-gray-400 opacity-70" />
      <div className="absolute bottom-32 right-20 w-24 h-24 rounded-full border border-gray-400 opacity-70" />
      <div className="absolute bottom-16 left-1/3 w-3 h-3 rounded-full bg-gray-500 opacity-70" />
      <div className="absolute bottom-40 right-1/4 w-2 h-20 bg-gray-300 rotate-12 opacity-70" />
      <div className="absolute bottom-12 right-1/2 w-4 h-4 rotate-45 border border-gray-400 opacity-70" />

      {/* Content */}
      <div className="relative grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT: PHOTO */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Ashutosh"
            className="w-72 h-72 object-cover rounded-xl bg-gray-200"
          />
        </div>

        {/* RIGHT: BIO + ACTIONS */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Hi, I’m Ashutosh.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-gray-600 text-lg leading-relaxed mb-10"
          >
            I’m a full-stack developer focused on building clean,
            maintainable web applications with strong backend
            architecture, cloud deployment workflows, and modern UI.
          </motion.p>

          {/* Unified Buttons */}
          <div className="flex flex-wrap gap-4">
            {[
              { label: "View Skills", to: "/skills" },
              { label: "View Projects", to: "/projects" },
              { label: "Certifications", to: "/certifications" },
            ].map((btn) => (
              <motion.div
                key={btn.to}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to={btn.to}
                  className="
                    inline-block px-6 py-3 rounded-lg font-medium
                    text-white
                    bg-gradient-to-r from-gray-900 to-gray-700
                    shadow-md hover:shadow-lg transition
                  "
                >
                  {btn.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
