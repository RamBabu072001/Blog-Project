import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
    const [userData , setUserData] = useState(
        {
            name :"",
            email :"",
            password:"",
            password2:""
        }
    )

    const Userdatahandle = (e)=>{
        setUserData(prevState =>{
            return{...prevState , [e.target.name]: e.target.value }
        })
    }

  return (
    <div className='register bg-dark'>
        
            <form className='register_form'>
            <h1 className='text-center'>Register</h1>
            <input type="text" placeholder="Full Name" name="name"  value={userData.name} onChange={Userdatahandle}></input>
            <input type="text" placeholder="email" name="email" value={userData.email} onChange={Userdatahandle}></input>
            <input type="text" placeholder='password' name='password' value={userData.password} onChange={Userdatahandle}></input>
            <input type="text" placeholder='confirm password' name="confirm password" value={userData.password2} onChange={Userdatahandle}></input>
            <button>Register</button>
            <p>Already have an account ? <Link to='/Login'>Sign in</Link></p>
            </form>
         
    </div>
  )
}

export default Register