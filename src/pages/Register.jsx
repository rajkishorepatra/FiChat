import React from 'react'
import avatar from '../img/avatar.jpg'

function Register() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>fiChat</span>
            <span className='title'>Register</span>
            <form>
                <input type='text' placeholder='Display Name..'/>
                <input type='email' placeholder='Your Email ID...'/>
                <input type='password' placeholder='Password'/>
                <input style={{display:"none"}} type='file' id='file'/>
                <label htmlFor="file">
                    <img src={avatar} alt='avatar'/>
                    <span>Add Your Avatar</span>
                </label>
                <button>Sign Up</button>
            </form>  
            <p>Have an account already? LogIn</p>      
        </div>
    </div>
  )
}

export default Register