import React, { Suspense } from 'react'
import ListOfPosts from './ListOfPosts'

function PostPage () {
  return (
    <section>
      <Suspense fallback={<div>Cargando ...</div>}>
        <ListOfPosts />
      </Suspense>
    </section>
  )
}

export default PostPage
