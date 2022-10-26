import React from 'react'

const Layout = (props) => {
  return (
    <>
        <div className='header'>
            <div className='col'>
                <a href='/' className='logo'>Miljan Peric</a>
            </div>
            <div className='col'>
                <span className='name'>Ricpe</span>
                <a href='/Login' className='login'> Login</a>
            </div>
            
        </div>
        <div className='main'>
            {props.children}
        </div>
        <div className='footer'>
            <p>&copy;2022.All rights reserved. Powered by Miljan Peric</p>
        </div>
    </>
  )
}

export default Layout