import './App.css'
import NavBar from './components/ui/Navbar'
import { Header } from './components/ui/Header'
import { Timeline } from './components/ui/Timeline'

function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[hsl(220,23%,97%)] dark:bg-neutral-950">
        <NavBar />
        <Header />
        <Timeline />
      </div>
    </>
  )
}

export default About