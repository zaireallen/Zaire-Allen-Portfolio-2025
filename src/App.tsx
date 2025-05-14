import './App.css'
import { DotBackground } from './components/ui/DotBackground'
import { Header } from './components/ui/Header'

function App() {
  // Main application component that renders the timeline
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <DotBackground />
      </div>
    </>
  )
}

export default App
