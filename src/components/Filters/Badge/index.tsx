import React, { FC } from 'react'
import './styles.css'
import { BadgeProps } from './types'

const Badge: FC<BadgeProps> = ({ className, name }) => {
  return (
    <button className={`badge ${className}`}>{name}</button>
  )
}

export default Badge