import { useEffect, useState } from "react"

const links = [
  { name: "Home", id: "hero" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
]

export default function Navbar() {
  const [active, setActive] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.6 }
    )

    links.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/70 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-semibold">Ash</span>

        <ul className="flex gap-6 text-sm">
          {links.map((l) => (
            <li
              key={l.id}
              onClick={() =>
                document.getElementById(l.id)?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className={`cursor-pointer transition ${
                active === l.id
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {l.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
