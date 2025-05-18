import './App.css'
import NavBar from './components/ui/NavBar'

function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[hsl(220,23%,97%)] dark:bg-neutral-950">
        <NavBar />
        <h1 className='text-2xl font-bold text-slate-700 dark:text-slate-100'>About</h1>
      </div>
    </>
  )
}

export default About