import React from 'react'

async function fetchPost () {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}

export default async function ListOfPosts () {
  const posts = await fetchPost()

  return (
    <>
      {posts.slice(0, 5).map(post => (
        <article key={post.id}>
          <h2 className='text-blue-400'>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </>
  )
}
