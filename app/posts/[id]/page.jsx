import Link from 'next/link'
import Image from 'next/image'

async function fetchPost (id) {
  try {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: {
        revalidate: 10
      }
    })
      .then(res => res.json())
  } catch (error) {
    throw new Error('Algo salio mal')
  }
}

async function Posts ({ children, params }) {
  const { id } = params
  const post = await fetchPost(id)

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Image width='50' height='50' alt={post.name} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${post.id}.svg`} />
      <Link href={`/posts/${id}/comments}`}>Ver comentarios</Link>
      {children}
    </article>
  )
}

export default Posts
