import React, { FC } from 'react'
import './styles.css'
import { BadgeProps } from './types'

const Badge: FC<BadgeProps> = ({ name }) => {
  return (
    <button className="badge">{name}</button>
  )
}

export default Badge