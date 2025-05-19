import { Link } from 'react-router-dom'

function Navbar() {
 

    
    return (
        <nav className={`max-w-sm mx-auto justify-center mt-12 fixed top-0 left-0 right-0 z-50 border-1 border rounded-full border-slate-200 text-slate-700 border-neutral-700 text-slate-100`}>
            <div className="flex h-16 items-center px-8">
                <div className="flex items-center dark:text-neutral-100 space-x-4 lg:space-x-6 justify-between w-full">
                    <span className="text-sm font-medium transition-colors hover:text-primary">
                        zaire allen
                    </span>
                    <section className="flex items-center space-x-4 lg:space-x-6">
                        <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
                            work
                        </Link>
                        <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
                            story
                        </Link>
                        <a href="https://github.com/ZaireAllen" target="_blank" rel="noopener noreferrer">
                            <button className="relative inline-flex h-12 w-24 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-slate-950 bg-slate-50 dark:text-neutral-100 text-slate-800 px-3 py-1 text-sm font-medium backdrop-blur-3xl">
                                    github
                                </span>
                            </button>
                        </a>
                    </section>
                </div>
            </div>
        </nav>
    )
}

export default Navbar