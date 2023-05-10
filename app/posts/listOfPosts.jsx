import React from 'react'
import LikeButton from './LikeButton'
import Link from 'next/link'

async function fetchPost () {
  await new Promise(resolve => setTimeout(resolve, 3000))

  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 10
    }
  })
    .then(res => res.json())
}

export default async function ListOfPosts () {
  const posts = await fetchPost()

  return (
    <>
      {posts.slice(0, 5).map(post => (
        <article key={post.id}>
          <Link href='/posts/[id]' as={`/posts/${post.id}`}>
            <h2 className='text-blue-400'>{post.title}</h2>
            <p>{post.body}</p>
            <LikeButton id={post.id} />
          </Link>
        </article>
      ))}
    </>
  )
}
