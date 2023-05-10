import Link from 'next/link'

async function fetchPost (id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 10
    }
  })
    .then(res => res.json())
}

async function Posts ({ children, params }) {
  const { id } = params
  const post = await fetchPost(id)

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments}`}>Ver comentarios</Link>
      {children}
    </article>
  )
}

export default Posts
