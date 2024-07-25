import React , {useState} from 'react'
import { Link } from 'react-router-dom'
function Login() {
  
    const [userData , setUserData] = useState(
        {
            name :"",
            
            password:""
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
        <h1 className='text-center'>Login</h1>
        <input type="text" placeholder="Full Name" name="name"  value={userData.name} onChange={Userdatahandle}></input>
       
        <input type="text" placeholder='confirm password' name="confirm password" value={userData.password2} onChange={Userdatahandle}></input>
        <button>Login</button>
        <p>If you don't have an account ? <Link to='/Register'>Sign Up</Link></p>
        </form>
     
</div>
  )
}

export default Login