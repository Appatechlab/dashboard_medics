import React from 'react'
import logo from "../../assets/logo.svg"

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
        <img src={logo} alt="logo" className='w-6'/>
        <p className='font-bold'>Medicare</p>
    </div>
  )
}

export default Logo