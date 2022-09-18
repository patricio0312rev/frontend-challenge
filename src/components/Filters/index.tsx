import React, { FC } from 'react'
import './styles.css'
import { FiltersProps } from './types.d';
import Badge from '../Badge'

const Filters: FC<FiltersProps> = ({ data }) => {
    
  return (
    <div className="filters">
        <div className="container">
            {
                data.map((filter, idx) => {
                    return <Badge key={idx} name={filter} />
                })
            }
        </div>  
    </div>
  )
}

export default Filters