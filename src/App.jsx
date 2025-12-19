import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import OrbitSkills from "./components/OrbitSkills"
import Projects from "./components/Projects"
import CursorGlow from "./components/CursorGlow"

export default function App() {
  return (
    <div className="relative bg-gray-950 text-white min-h-screen overflow-hidden">
      <CursorGlow />
      <Navbar />

      <main>
        <Hero />
        <OrbitSkills />
        <Projects />
      </main>
    </div>
  )
}
