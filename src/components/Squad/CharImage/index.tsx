import React, { FC } from 'react'
import './styles.css'
import { CharImageProps } from './types'

const CharImage: FC<CharImageProps> = ({ image, alt} ) => {
  return (
    <div className="image-container">
        <div className="remove">
            Remove
        </div>
        <img src={image} alt={alt} />
    </div>
  )
}

export default CharImage