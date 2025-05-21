import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { playClickSound } from '@/lib/data/sounds';

function Navbar() {
    const location = useLocation();
    const [hovered, setHovered] = useState<string | null>(null);
    const [emailCopied, setEmailCopied] = useState(false);
    const [emailHover, setEmailHover] = useState(false);
    const [githubBtnHover, setGithubBtnHover] = useState(false);
    const email = "hey@zaireallen.com";

    // Helper to determine which link should show the indicator
    const getIndicator = (path: string) => {
        // Show indicator if hovered, else if active
        return (hovered === path || (!hovered && location.pathname === path));
    };

    // The path for the indicator (hovered or active)
    const indicatorPath = hovered || location.pathname;

    // DRY click handler for nav links
    const handleLinkClick = () => {
        playClickSound();
    };

    // Email click handler
    const handleEmailClick = async () => {
        try {
            playClickSound();
            await navigator.clipboard.writeText(email);
            setEmailCopied(true);
            toast.success('Email copied to clipboard!');
        } catch (error) {
            toast.error('Failed to copy email to clipboard');
            console.error('Failed to copy email:', error);
        }
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <nav className="max-w-xl mx-auto flex items-center justify-center mt-12 fixed top-0 left-4 right-4 sm:left-4 sm:right-4 z-50 border-1 border rounded-full border-slate-200 dark:border-neutral-700 backdrop-blur-sm h-16">
            <div className="flex h-full items-center px-8 w-full">
                <div className="flex items-center space-x-4 lg:space-x-6 justify-between w-full h-full">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-100 transition-colors hover:text-primary flex items-center h-full flex-shrink-0">
                        Zaire
                    </span>
                    <section className="flex items-center gap-2 md:gap-4 lg:gap-6 h-full">
                        {/* Work Link */}
                        <div className="relative h-full flex items-center">
                            <Link 
                                to="/" 
                                onMouseEnter={() => setHovered('/')} 
                                onMouseLeave={() => setHovered(null)}
                                onClick={handleLinkClick}
                                className={`text-xs md:text-sm font-medium transition-all duration-200 ease-in-out px-2 rounded cursor-pointer h-full flex items-center
                                    ${(location.pathname === '/' && !hovered) || hovered === '/' 
                                        ? 'text-slate-900 dark:text-white' 
                                        : hovered === '/'
                                            ? 'text-rose-600 dark:text-rose-400'
                                            : 'text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400'}
                                `}
                            >
                                work
                            </Link>
                            {getIndicator('/') && indicatorPath === '/' && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-rose-600 dark:bg-rose-400 rounded-full"
                                    transition={{ type: 'spring', stiffness: 300, damping: 12, mass: 0.5 }}
                                />
                            )}
                        </div>
                        {/* Experience Link */}
                        <div className="relative h-full flex items-center">
                            <Link
                                to="/exp"
                                onMouseEnter={() => setHovered('/exp')}
                                onMouseLeave={() => setHovered(null)}
                                onClick={handleLinkClick}
                                className={`text-xs md:text-sm font-medium transition-all duration-200 ease-in-out px-2 rounded cursor-pointer h-full flex items-center
                                    ${(location.pathname === '/exp' && !hovered) || hovered === '/exp'
                                        ? 'text-slate-900 dark:text-white'
                                        : hovered === '/exp'
                                            ? 'text-rose-600 dark:text-rose-400'
                                            : 'text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400'}
                                `}
                            >
                                exp
                            </Link>
                            {getIndicator('/exp') && indicatorPath === '/exp' && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-rose-600 dark:bg-rose-400 rounded-full"
                                    transition={{ type: 'spring', stiffness: 300, damping: 12, mass: 0.5 }}
                                />
                            )}
                        </div>
                        {/* Story Link */}
                        <div className="relative h-full flex items-center">
                            <Link 
                                to="/about" 
                                onMouseEnter={() => setHovered('/about')} 
                                onMouseLeave={() => setHovered(null)}
                                onClick={handleLinkClick}
                                className={`text-xs md:text-sm font-medium transition-all duration-200 ease-in-out px-2 rounded cursor-pointer h-full flex items-center
                                    ${(location.pathname === '/about' && !hovered) || hovered === '/about' 
                                        ? 'text-slate-900 dark:text-white' 
                                        : hovered === '/about'
                                            ? 'text-rose-600 dark:text-rose-400'
                                            : 'text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400'}
                                `}
                            >
                                story
                            </Link>
                            {getIndicator('/about') && indicatorPath === '/about' && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-rose-600 dark:bg-rose-400 rounded-full"
                                    transition={{ type: 'spring', stiffness: 300, damping: 12, mass: 0.5 }}
                                />
                            )}
                        </div>
                        {/* Email Me Button */}
                        <div className="relative h-full flex items-center">
                            <button
                                onMouseEnter={() => setEmailHover(true)}
                                onMouseLeave={() => setEmailHover(false)}
                                className={`text-xs md:text-sm font-medium transition-all duration-200 ease-in-out px-2 rounded cursor-pointer h-full flex items-center
                                    ${emailHover
                                        ? 'text-rose-600 dark:text-rose-400'
                                        : 'text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400'}
                                `}
                                onClick={handleEmailClick}
                            >
                                {emailCopied ? 'copied' : 'email'}
                            </button>
                            {emailHover && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-rose-600 dark:bg-rose-400 rounded-full"
                                    transition={{ type: 'spring', stiffness: 300, damping: 12, mass: 0.5 }}
                                />
                            )}
                        </div>
                        {/* Github Button */}
                        <div className="relative h-full flex items-center">
                            <a href="https://github.com/ZaireAllen" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                                <button
                                    className={`text-xs md:text-sm font-medium transition-all duration-200 ease-in-out px-2 rounded cursor-pointer h-full flex items-center
                                        ${githubBtnHover
                                            ? 'text-rose-600 dark:text-rose-400'
                                            : 'text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400'}
                                    `}
                                    onMouseEnter={() => setGithubBtnHover(true)}
                                    onMouseLeave={() => setGithubBtnHover(false)}
                                >
                                    github
                                </button>
                            </a>
                            {githubBtnHover && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-rose-600 dark:bg-rose-400 rounded-full"
                                    transition={{ type: 'spring', stiffness: 300, damping: 12, mass: 0.5 }}
                                />
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </nav>
    )
}

export default Navbar