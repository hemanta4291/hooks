import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetchData = (url) => {
    const [users,setUsers] = useState([])
    let [currentIndex,setCurrentIndex] = useState(0)
    const [isLoading,setIsLoading] = useState(false)
    console.log(users&& users)
    const fetchUser = () => {
        setIsLoading(true)
        axios(url)
        .then((response)=>{
            const {data} = response
            
            const {results:userList} = data
            // console.log(userList)
            const {name:{first,last},picture:{thumbnail}}= userList[0]

            // console.log(first,last,thumbnail)
            let numUsers = users.length
            
            setUsers([...users,{name:`${first} ${last}`,picture:thumbnail}])
            
            setCurrentIndex(numUsers)
            console.log(numUsers,currentIndex)
            setIsLoading(false)
        })
    }

    useEffect(()=>{
        fetchUser()
      
    },[])

    const next = () => {
        // if(currentIndex +1 <users.length){
        //     setCurrentIndex(currentIndex+1)
        // }else{
        //     fetchUser()
        // }
        if(currentIndex+1<users.length){
            setCurrentIndex(currentIndex+1)
        }else{
        fetchUser()
        // setCurrentIndex(currentIndex+1)
        }
        console.log(users.length,currentIndex)
    }

    const previous = () => {
        
        if(currentIndex === 0){
            setCurrentIndex(0)
        }else{
            // currentIndex = currentIndex - 1
            // console.log(currentIndex)
            setCurrentIndex(currentIndex-1)
        }

        console.log(users.length,currentIndex)

       
    }

  return [users,users[currentIndex],isLoading,next,previous]
}

export default useFetchData