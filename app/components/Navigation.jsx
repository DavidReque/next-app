import React from 'react'
import Link from 'next/link'

function Navigation () {
  const links = [{
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  }, {
    label: 'Posts',
    route: '/posts'
  }
  ]

  return (
    <div>
      <header className='border border-solid border-white rounded-lg p-4'>
        <nav className='flex justify-center'>
          <ul className='inline-block sm:flex sm:justify-end'>
            {links.map(({ label, route }) => (
              <li key={route} className='hover:underline mr-5'>
                <Link href={route}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navigation
