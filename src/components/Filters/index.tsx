import React, { FC } from 'react'
import './styles.css'
import { FiltersProps } from './types.d';
import Badge from '../Badge'

const Filters: FC<FiltersProps> = ({ data, selectedFilters, toggleFilter }) => {
    
  return (
    <div className="filters">
        <div className="container">
            {
                data.map((filter, idx) => {
                    return (
                        <div onClick={() => toggleFilter(filter)}>
                            <Badge key={idx} name={filter} className={`${selectedFilters.includes(filter) && 'selected'}`} />
                        </div>
                    )
                })
            }
        </div>  
    </div>
  )
}

export default Filters