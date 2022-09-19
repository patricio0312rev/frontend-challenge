import React, { FC } from 'react'
import './styles.css'
import { FiltersProps } from './types.d';
import Badge from './Badge'

const Filters: FC<FiltersProps> = ({ clearAllFilters, data, filterMyTeam, selectedFilters, toggleFilter }) => {
    
  return (
    <section id="filters" className="filters">
        <div className="container">
            {
                data.map((filter, idx) => {
                    return (
                        <div onClick={() => toggleFilter(filter)} key={idx} >
                            <Badge name={filter} className={`${selectedFilters.includes(filter) && 'selected'}`} />
                        </div>
                    )
                })
            }
            <div onClick={() => filterMyTeam()}>
                <Badge name='My Team' />
            </div>
            <div className="clear" onClick={() => clearAllFilters()}>Clear all</div>
        </div>  
    </section>
  )
}

export default Filters