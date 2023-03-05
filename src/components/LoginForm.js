import React, { useState } from 'react'
import login from '../hooks/useLogin'

const LoginForm = () => {
    const [email,setEmail] = useState('')
    const [password,setPassowrd] = useState('')
    const [isLoading,setIsloading] = useState(false)
    const [success,setScuccss] = useState('')
    const [error,setError] = useState('')
    const [disabled,setDisabled]= useState(false)
    const [emailError,setEmailError]= useState('')
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    const emailValueChange = (e) => {
        setEmail(e.target.value)
        if(mailformat.test(e.target.value)){
            setEmailError('')
        }else{
            setEmailError("email not valid")
        }
    }
   const disabledE = !email || password.length<6
   console.log(disabledE)
    const loginHandle = async() => {
        console.log(email,password)
        try{
            setScuccss(await login({email,password}))
            setError('')
        } catch(error){
            setError(error)
            setScuccss('')
        }
        
    }

  return (
    <div>
        <div>
            <input type="email" onChange={emailValueChange} value={email} placeholder='Email' />
            {emailError&&
                <p>{emailError}</p>
            }
        </div>
        <div>
            <input type="passoword" onChange={(e)=>setPassowrd(e.target.value)} value={password} placeholder='Password' />
        </div>
        <button  disabled={disabledE} onClick={loginHandle}>Login</button>
        <p>{success && success}</p>
        <p>{error && error}</p>
    </div>
  )
}

export default LoginForm