import './App.css'
import NavBar from './components/ui/Navbar'
import { Header } from './components/ui/Header'
import { Timeline } from './components/ui/Timeline'
import { PageTransition } from './components/PageTransition'

function About() {
  return (
    <div className="mx-auto flex flex-col bg-[hsl(220,23%,97%)] dark:bg-neutral-950">
      <NavBar />
      <Header />
        <PageTransition>
          <Timeline />
        </PageTransition>
    </div>
  )
}

export default About