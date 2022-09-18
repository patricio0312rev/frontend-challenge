import React from 'react';
import MKLogo from '../../assets/img/Mortal-Kombat-Logo.png';
import './styles.css';

const Masthead = () => {
  return (
    <header>
        <div className='masthead' />
        <div className="logo-container">
            <img src={MKLogo} alt="Mortal Kombat Logo" className='logo'/>
        </div>
    </header>
  )
}

export default Masthead