import React from 'react';
import mortalKombatLogo from '../../assets/img/Mortal-Kombat-Logo.png';
import './styles.css';

const Masthead = () => {
  return (
    <header>
        <div className='masthead' />
        <div className="logo-container">
            <img src={mortalKombatLogo} alt="Mortal Kombat Logo" className='logo'/>
        </div>
    </header>
  )
}

export default Masthead