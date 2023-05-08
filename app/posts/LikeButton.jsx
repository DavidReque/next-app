'use client'
import React, { useState } from 'react'

export default function LikeButton ({ id }) {
  const [liked, setLiked] = useState(false)

  return (
    <div>
      <button onClick={() => setLiked(!liked)}>
        {liked ? '❤️' : '🖤'}
      </button>
    </div>
  )
}
