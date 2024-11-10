import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function StarRating({ rating }) {
    // create an array of stars based on the rating

    const stars = Array(5).fill(false).map((_, index) => index < rating )

  return (
    <div style={{display: 'flex', gap: '2px'}}>
      {
        stars.map((isFilled, index) => (
          <FaStar key={index} color={isFilled ? "#FFD700" : "#e4e5e9"} />
        ))
      }
    </div>
  )
}
