import React from 'react'

async function fetchPost (id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 10
    }
  })
    .then(res => res.json())
}

async function Comments ({ params }) {
  const { id } = params
  const post = await fetchPost(id)

  return (
    <ul>
      {post.map((coment) => (
        <li key={coment.id}>
          <h2>{coment.name}</h2>
          <p>{coment.body}</p>
        </li>
      ))}
    </ul>
  )
}

export default Comments
