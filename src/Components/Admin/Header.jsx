import React from 'react'
import NavBar from '../NavBar/NavBar';

function Header({OpenSidebar}) {
  return (
    <header className='header'>
      <div style={{backgroundColor:'white',width:'1300px'}}>
        <NavBar  />
      </div>
    </header>
  )
}

export default Header