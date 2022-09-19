import React, { FC, useEffect, useState } from 'react'
import TotalScore from './TotalScore'
import './styles.css'
import { SquadProps } from './types'
import CharImage from './CharImage'

const Squad: FC<SquadProps> = ({ removeCharacter, selectedCharacters }) => {
  const [power, setPower] = useState<string|number>(0);
  const [mobility, setMobility] = useState<string|number>(0);
  const [technique, setTechnique] = useState<string|number>(0);
  const [survivability, setSurvivability] = useState<string|number>(0);
  const [energy, setEnergy] = useState<string|number>(0);

  const countDecimals = (value: number) => {
    if(Math.floor(value) === value) return 0;

    return value.toString().split(".")[1].length || 0; 
  }

  const getAverage = (array: number[]) => {
      var i = 0, sum = 0, average = 0;

      while (i < array.length) {
        sum = sum + array[i++];
      }
      average = sum/array.length;

      if (countDecimals(average) !== 0) return average.toFixed(2)

      return average
  }


  useEffect(() => {
    if(selectedCharacters.length > 0) {
      setPower(getAverage(selectedCharacters.map((character) => character.abilities[3].abilityScore)))
      setMobility(getAverage(selectedCharacters.map((character) => character.abilities[0].abilityScore)))
      setTechnique(getAverage(selectedCharacters.map((character) => character.abilities[1].abilityScore)))
      setSurvivability(getAverage(selectedCharacters.map((character) => character.abilities[2].abilityScore)))
      setEnergy(getAverage(selectedCharacters.map((character) => character.abilities[4].abilityScore)))
    }
  }, [selectedCharacters])

  return (
    <section id='squad' className='squad'>
      <div className="container">
        {
          selectedCharacters.length > 0 && 
          <div className="team">
            {
              selectedCharacters.map((character, idx) => {
                return <CharImage key={idx} image={character.image} alt={character.name} onClick={() => removeCharacter(character)} bigSize={true} />
              })
            }
          </div>
        }

        <div className='scores'>
          <div className="score-group">
            <TotalScore title={"Power"} score={power}/>
            <TotalScore title={"Mobility"} score={mobility} />
          </div>
          <div className="score-group">
            <TotalScore title={"Technique"} score={technique} />
          </div>
          <div className="score-group">
            <TotalScore title={"Survivability"} score={survivability} />
            <TotalScore title={"Energy"} score={energy} />
          </div>
        </div>

        <div className="note">
          * Totals as average for squad
        </div>
      </div>
    </section>
  )
}

export default Squad