import React from 'react'
import searchIcon from '../../assets/svg/search.svg';
import './styles.css'

const SearchBar = () => {
  return (
    <div className="search">
        <div className="container">
            <div className="gradient" />
            <div className="search-bar">
                <img src={searchIcon} alt="search icon" />
                <input type="text" placeholder="Search Characters..." id="search" name="search" autoComplete={'off'}/>
            </div>
        </div>
    </div>
  )
}

export default SearchBar