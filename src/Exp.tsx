import './App.css'
import NavBar from './components/ui/Navbar'
import { Header } from './components/ui/Header'
import { PageTransition } from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'

function Exp() {
  return (
    <>
      <ScrollToTop />
      <div className="mx-auto flex flex-col bg-[hsl(220,23%,97%)] dark:bg-neutral-950">
        <NavBar />
        <PageTransition>
          <Header />
        </PageTransition>
      </div>
    </>
  )
}

export default Exp