import { NavLink } from "react-router-dom"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const links = [
  { name: "Home", to: "/" },
  { name: "Skills", to: "/skills" },
  { name: "Projects", to: "/projects" },
  { name: "Certifications", to: "/certifications" },
]

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">

        {/* LEFT: Navigation */}
        <ul className="flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <li key={link.to} className="relative group">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-black"
                      : "text-gray-500 hover:text-black"
                  }`
                }
              >
                {link.name}
              </NavLink>

              {/* Hover underline */}
              <span
                className="
                  absolute left-0 -bottom-1 h-[1.5px] w-0
                  bg-black transition-all duration-300
                  group-hover:w-full
                "
              />
            </li>
          ))}
        </ul>

        {/* CENTER: Title */}
        <div className="text-center">
          <span className="text-base font-semibold tracking-wide">
            Ashutosh’s Portfolio
          </span>
        </div>

        {/* RIGHT: Social Icons */}
        <div className="flex justify-end items-center gap-5">
          <a
            href="https://www.linkedin.com/in/ashutosh-s-22a1383a1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="
              text-gray-500 text-xl transition
              hover:text-black hover:-translate-y-[1px] hover:scale-105
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/AshxJay"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="
              text-gray-500 text-xl transition
              hover:text-black hover:-translate-y-[1px] hover:scale-105
            "
          >
            <FaGithub />
          </a>
        </div>

      </div>
    </nav>
  )
}
