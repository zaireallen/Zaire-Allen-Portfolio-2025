import './App.css'
import { Link } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function NotFoundPage() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col items-center justify-center bg-[hsl(220,23%,97%)] dark:bg-neutral-950">
            <h1 className='mt-40 text-2xl font-bold text-slate-700 dark:text-slate-100'>
                Page not found
            </h1>
            <Link to={"/"} className="text-blue-500">
                Go back to the home page
            </Link>
      </div>
    </>
  )
}

export default NotFoundPage 