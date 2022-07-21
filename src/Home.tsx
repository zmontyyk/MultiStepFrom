import React from 'react'
import { useNavigate } from "react-router-dom";
import './App.css'

import './App.css'
const Home = () => {



  const navigate = useNavigate()
  return (
    <div>
      <h1 className='main m-5' >welcome to codeX </h1>
      <p className='main2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, officia quis molestias tempora aliquid corrupti autem dolorum earum voluptas sit vel fugit amet? Laudantium dolores ducimus vel praesentium quia voluptas?</p>
      <button onClick={()=>navigate('./BasicInformation')} className='btn home btn-primary '>Get Started</button>
    </div>
  )
}

export default Home
