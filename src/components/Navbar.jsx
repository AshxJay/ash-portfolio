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
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-black"
                    : "text-gray-500 hover:text-black transition"
                }
              >
                {link.name}
              </NavLink>
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
        <div className="flex justify-end items-center gap-4">
          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

      </div>
    </nav>
  )
}
