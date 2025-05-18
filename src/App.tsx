import './App.css'
import { Header } from './components/ui/Header'
import { Timeline } from './components/ui/Timeline'
import NavBar from './components/ui/NavBar'

function App() {
  
  // Main application component that renders the timeline
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

export default App
