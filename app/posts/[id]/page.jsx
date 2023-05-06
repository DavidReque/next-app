import React from 'react'

function Posts ({ params }) {
  const { id } = params

  return (
    <div>Posts {id}</div>
  )
}

export default Posts
