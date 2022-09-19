import React from 'react'
import TotalScore from './TotalScore'
import './styles.css'

const Squad = () => {
  return (
    <div className='squad'>
      <div className="container">
        <div className='scores'>
          <div className="score-group">
            <TotalScore title={"Power"} score={0}/>
            <TotalScore title={"Mobility"} score={4} />
          </div>
          <div className="score-group">
            <TotalScore title={"Technique"} score={7} />
          </div>
          <div className="score-group">
            <TotalScore title={"Survivability"} score={8} />
            <TotalScore title={"Energy"} score={9} />
          </div>
        </div>

        <div className="note">
          * Totals as average for squad
        </div>
      </div>
    </div>
  )
}

export default Squad