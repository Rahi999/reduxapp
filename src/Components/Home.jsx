import React from 'react'
import { useSelector } from 'react-redux'
import { loadData } from '../utils/LocalStorage'

const Home = () => {
     const token = useSelector((state)=> state.AuthReducer.token)
    // alert(token)
    const tokn = loadData("token") || token
   
  return (
    <div>Home :
        <div>Token is : {tokn ? tokn.token : null}</div>
    </div>
  )
}

export default Home