import React from 'react'
import avatar from '../img/avatar.jpg'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Register() {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
    const res = await createUserWithEmailAndPassword(auth, email, password)
    }catch(err){}
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>fiChat</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Display Name..' />
          <input type='email' placeholder='Your Email ID...' />
          <input type='password' placeholder='Password' />
          <input style={{ display: "none" }} type='file' id='file' />
          <label htmlFor="file">
            <img src={avatar} alt='avatar' />
            <span>Add Your Avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something went wrong!</span>}
        </form>
        <p>Have an account already? LogIn</p>
      </div>
    </div>
  )
}

export default Register