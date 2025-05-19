import { Link } from 'react-router-dom'
import { ThemeSwitcher } from '@/components/ui/kibo-ui/theme-switcher';
import { useState } from 'react';

function Navbar() {
    const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

    return (
        <>
            <nav className="max-w-sm mx-auto justify-center mt-12 fixed top-0 left-0 right-0 z-50 border-1 border rounded-full border-slate-200 dark:border-neutral-700">
                <div className="flex h-16 items-center px-8">
                    <div className="flex items-center space-x-4 lg:space-x-6 justify-between w-full">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-100 transition-colors hover:text-primary">
                            Zaire Allen
                        </span>

                        <section className="flex items-center space-x-4 lg:space-x-6">
                            <Link to="/" className="text-sm font-medium text-slate-700 dark:text-slate-100 transition-colors hover:text-primary">
                                work
                            </Link>
                            <Link to="/about" className="text-sm font-medium text-slate-700 dark:text-slate-100 transition-colors hover:text-primary">
                                story
                            </Link>
                        </section>

                        <ThemeSwitcher defaultValue="system" value={theme} onChange={setTheme} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar