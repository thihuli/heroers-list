import React from 'react'
import './styles.scss'

function CardHeroes ({ name, imageURl, onClick }) {
  return (
    <div
      className='card'
      onClick={onClick}
    >
      <img
        src={imageURl}
        alt='hero'
        loading='lazy'
      />
      <p>{name}</p>
    </div>
  )
}

export default CardHeroes
