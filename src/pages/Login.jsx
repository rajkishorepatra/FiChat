import React from 'react'

function Login() {
  return (
    <div>
        <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>fiChat</span>
            <span className='title'>LogIn</span>
            <form>
                <input type='email' placeholder='Email ID...'/>
                <input type='password' placeholder='Password'/>
                <button>Sign In</button>
            </form>  
            <p>Don't have an account? Register</p>      
        </div>
    </div>
    </div>
  )
}

export default Login