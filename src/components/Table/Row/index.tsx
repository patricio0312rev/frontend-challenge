import React, { FC } from 'react'
import Badge from '../../Filters/Badge'
import './styles.css'
import CharImage from '../../Squad/CharImage/index';
import { RowProps } from './types';

const Row: FC<RowProps> = ({ data }) => {
  return (
    <tr className='row'>
        <td>
            <div className="flex">                
                <input type="checkbox" name="selected" id="selected" />
                <CharImage image={data.image} alt={data.name} />
                <b className="name">{data.name}</b>
            </div>
        </td>
        <td>
            <div className="flex">
                {
                    data.tags !== undefined && data.tags.map((tag) => {
                        return <Badge key={tag.slot} name={tag.tag_name} />
                    })
                }
            </div>
        </td>
        <td className={`${data.abilities[3].abilityScore === 10 && 'red'}`}><span>{data.abilities[3].abilityScore}</span></td>
        <td className={`${data.abilities[0].abilityScore === 10 && 'red'}`}><span>{data.abilities[0].abilityScore}</span></td>
        <td className={`${data.abilities[1].abilityScore === 10 && 'red'}`}><span>{data.abilities[1].abilityScore}</span></td>
        <td className={`${data.abilities[2].abilityScore === 10 && 'red'}`}><span>{data.abilities[2].abilityScore}</span></td>
        <td className={`${data.abilities[4].abilityScore === 10 && 'red'}`}><span>{data.abilities[4].abilityScore}</span></td>
    </tr>
  )
}

export default Row