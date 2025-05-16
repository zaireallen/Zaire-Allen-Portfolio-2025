import './App.css'
import { Header } from './components/ui/Header'
import { Timeline } from './components/ui/Timeline'
import { timelineData } from './lib/data/timeline.js'  

function App() {
  // Main application component that renders the timeline
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[hsl(220,23%,97%)] dark:bg-neutral-950">
        <Header />
        <Timeline data={timelineData} />
      </div>
    </>
  )
}

export default App
