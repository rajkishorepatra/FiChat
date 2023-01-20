import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>fiChat</span>
        <div className='user'>
            <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' />
            <span>Raj</span>
            <button>LogOut</button>
        </div>
    </div>
  )
}

export default Navbar