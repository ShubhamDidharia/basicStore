// Navbar.jsx
import { HomeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkMode';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-500 p-4 text-white flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-16 w-16 text-blue-300 hover:text-purple-300 hover:-translate-y-0.5 hover:shadow-lg transition duration-200" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
        </svg>
        <h1 className='text-purple-300 text-2xl font-bold hover:text-white hover:-translate-y-0.5 hover:shadow-lg transition duration-200'>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            BasicStore
          </span>
        </h1>
      </div>

      <div className="flex space-x-6 items-center">
        <Link
          to="/"
          className="rounded-md px-3 py-2 text-sm font-medium text-blue-300 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg transition duration-200"
        >
          <HomeIcon className="h-6 w-6" />
        </Link>
        <Link
          to="/create"
          className="rounded-md px-3 py-2 text-sm font-medium text-blue-300 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg transition duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
