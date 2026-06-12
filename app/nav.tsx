'use client';

import { nav } from 'motion/react-client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Blog',
  },
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <div className='flex space-x-5'>
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className={clsx(
                'text-base transition-all text-black dark:text-white',
                {
                  'font-semibold': pathname === path,
                },
              )}
            >
              {name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}