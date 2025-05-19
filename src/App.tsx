import './App.css'
import NavBar from './components/ui/NavBar'
import Work from './components/ui/Work'

function App() {
  
  // Main application component that renders the timeline
  return (
    <>    
      <div className="flex flex-col items-center justify-center bg-[hsl(220,23%,97%)] dark:bg-neutral-950">
        <NavBar />
        <Work />
      </div>
    </>
  )
}

export default App
