import React from 'react'
import Counter from './Counter'

export default function layout ({ children }) {
  return (
    <div>
      <Counter />
      {children}
    </div>
  )
}
