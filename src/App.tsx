import './App.css'
import { Timeline } from './components/ui/timeline'
// Import timelineData directly from the module
import { timelineData } from './lib/data/timeline'

function App() {
  // Main application component that renders the timeline
  return (
    <>
      <Timeline data={timelineData} />
    </>
  )
}

export default App
