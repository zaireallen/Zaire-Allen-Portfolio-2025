import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
    const location = useLocation();
    const [hovered, setHovered] = useState<string | null>(null);
    const [githubHover, setGithubHover] = useState(false);

    // Helper to determine which link should show the indicator
    const getIndicator = (path: string) => {
        // Show indicator if hovered, else if active
        return (hovered === path || (!hovered && location.pathname === path));
    };

    // The path for the indicator (hovered or active)
    const indicatorPath = hovered || location.pathname;

    return (
        <nav className="max-w-sm mx-auto justify-center mt-12 fixed top-0 left-0 right-0 z-50 border-1 border rounded-full border-slate-200 dark:border-neutral-700 backdrop-blur-sm">
            <div className="flex h-16 items-center px-8">
                <div className="flex items-center space-x-4 lg:space-x-6 justify-between w-full">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-100 transition-colors hover:text-primary">
                        Zaire Allen
                    </span>
                    <section className="flex items-center space-x-4 lg:space-x-6">
                        <div className="relative">
                            <Link 
                                to="/" 
                                onMouseEnter={() => setHovered('/')} 
                                onMouseLeave={() => setHovered(null)}
                                className={`text-sm font-medium transition-all duration-200 ease-in-out
                                    ${(location.pathname === '/' && !hovered) || hovered === '/' 
                                        ? 'text-slate-900 dark:text-white' 
                                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                            >
                                work
                            </Link>
                            {getIndicator('/') && indicatorPath === '/' && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-slate-900 dark:bg-white rounded-full"
                                    transition={{ type: 'spring', stiffness: 300, damping: 12, mass: 0.5 }}
                                />
                            )}
                        </div>
                        <div className="relative">
                            <Link 
                                to="/about" 
                                onMouseEnter={() => setHovered('/about')} 
                                onMouseLeave={() => setHovered(null)}
                                className={`text-sm font-medium transition-all duration-200 ease-in-out
                                    ${(location.pathname === '/about' && !hovered) || hovered === '/about' 
                                        ? 'text-slate-900 dark:text-white' 
                                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                            >
                                story
                            </Link>
                            {getIndicator('/about') && indicatorPath === '/about' && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-slate-900 dark:bg-white rounded-full"
                                    transition={{ type: 'spring', stiffness: 300, damping: 12, mass: 0.5 }}
                                />
                            )}
                        </div>
                        <div className="relative">
                            <a href="https://github.com/ZaireAllen" target="_blank" rel="noopener noreferrer">
                                <button
                                    className="relative inline-flex h-12 w-24 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                                    onMouseEnter={() => setGithubHover(true)}
                                    onMouseLeave={() => setGithubHover(false)}
                                >
                                    {!githubHover ? (
                                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                    ) : (
                                        <motion.div
                                            layoutId="nav-indicator"
                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-slate-900 dark:bg-white rounded-full"
                                            transition={{ type: 'spring', stiffness: 300, damping: 12, mass: 0.5 }}
                                        />
                                    )}
                                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-slate-950 bg-slate-50 dark:text-neutral-100 text-slate-800 px-3 py-1 text-sm font-medium backdrop-blur-3xl">
                                        github
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </nav>
    )
}

export default Navbar