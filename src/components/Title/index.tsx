import React, { FC } from 'react'
import { TitleProps } from './types'
import './styles.css'

const Title: FC<TitleProps> = ({ content }) => {
  return (
    <h1 className='title'>{content}</h1>
  )
}

export default Title