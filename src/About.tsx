import './App.css'
import NavBar from './components/ui/Navbar'
import { Timeline } from './components/ui/Timeline'
import { PageTransition } from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'

function About() {
  return (
    <>
      <ScrollToTop />
      <div className="mx-auto flex flex-col bg-[hsl(220,23%,97%)] dark:bg-neutral-950">
        <NavBar />
        <PageTransition>
          <Timeline />
        </PageTransition>
      </div>
    </>
  )
}

export default About