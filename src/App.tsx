import './App.css'
import NavBar from './components/ui/Navbar'
import Work from './components/ui/Work'
import { HeaderShort } from './components/ui/HeaderShort'
import { PageTransition } from './components/PageTransition'
import { motion } from 'framer-motion'

function App() {
  
  // Main application component that renders the timeline
  return (
    <div className="mx-auto flex flex-col items-center justify-center bg-[hsl(220,23%,97%)] dark:bg-neutral-950">
      <NavBar />
      <PageTransition>
        <>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }}
            exit={{ opacity: 0, y: -24, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }}
          >
            <HeaderShort />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] } }}
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }}
          >
            <Work />
          </motion.div>
        </>
      </PageTransition>
    </div>
  )
}

export default App
