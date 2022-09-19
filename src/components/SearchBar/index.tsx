import React, { FC } from 'react'
import searchIcon from '../../assets/svg/search.svg';
import './styles.css'
import { SearchBarProps } from './types';

const SearchBar: FC<SearchBarProps> = ({ setSearchWord }) => {
  return (
    <section id="search" className='search'>
        <div className="container">
            <div className="gradient" />
            <div className="search-bar">
                <img src={searchIcon} alt="search icon" />
                <input type="text" placeholder="Search Characters..." id="search" name="search" autoComplete={'off'} onChange={(e) => setSearchWord(e.target.value)}/>
            </div>
        </div>
    </section>
  )
}

export default SearchBar