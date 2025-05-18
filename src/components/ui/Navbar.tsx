import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="flex justify-between max-w-7xl pt-12 md:px-8 lg:px-10 z-40">
                <ul className="flex gap-4 justify-between w-full">
                    <li><Link to="/" className="text-slate-700 dark:text-slate-100">Zaire Allen</Link></li>
                    <li><Link to="/about" className="text-slate-700 dark:text-slate-100">Story</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar