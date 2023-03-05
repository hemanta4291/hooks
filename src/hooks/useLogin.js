import React from 'react'

const login = ({email,password}) => {
    let promise = new Promise((res,rej)=>{
        if(password === "123456" && !!email){
            res("Login Success")
        }else{
            rej("passowrd or email not valid")
        }
    })
  return promise
}

export default login