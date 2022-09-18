import React, { FC } from 'react'
import './styles.css'
import { TotalScoreProps } from './types'

const TotalScore: FC<TotalScoreProps> = ({ title, score}) => {
  return (
    <div className="total-score">
        <p className="title">{title}</p>
        <p className="score">{score ? score : '-'}</p>
    </div>
  )
}

export default TotalScore