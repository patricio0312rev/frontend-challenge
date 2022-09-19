import React, { FC } from 'react'
import './styles.css'
import { CharImageProps } from './types'

const CharImage: FC<CharImageProps> = ({ alt, bigSize, image, onClick } ) => {
  return (
    <div className={`image-container ${bigSize && 'big'}`}>
        <div className="remove" onClick={onClick}>
            Remove
        </div>
        <img src={image} alt={alt} />
    </div>
  )
}

export default CharImage