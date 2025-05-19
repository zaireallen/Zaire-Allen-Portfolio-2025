import './App.css'
import NavBar from './components/ui/Navbar'
import Work from './components/ui/Work'

function App() {
  
  // Main application component that renders the timeline
  return (
    <>    
      <div className="w-full  flex flex-col items-center justify-center bg-[hsl(220,23%,97%)] dark:bg-neutral-950">
        <NavBar />
        <Work />
      </div>
    </>
  )
}

export default App
