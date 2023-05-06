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
  }
  ]

  return (
    <div>
      <header>
        <nav>
          <ul>
            {links.map(({ label, route }) => (
              <li key={route}>
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
