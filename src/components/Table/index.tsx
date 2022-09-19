import React, { FC } from 'react'
import Row from './Row'
import './styles.css'
import { TableProps } from './types'

const Table: FC<TableProps> = ({ data }) => {
  return (
    <section id="table" className='table'>
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Character</th>
                        <th>Tags</th>
                        <th>Power</th>
                        <th>Mobility</th>
                        <th>Technique</th>
                        <th>Survivability</th>
                        <th>Energy</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.slice(0, 3).map((character) => {
                            return <Row data={character} key={character.id} />
                        })
                    }
                </tbody>
            </table> 
        </div>
  </section>
  )
}

export default Table