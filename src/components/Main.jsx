import React from 'react'
import Panels from './Panels/Panels'
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'

const Main = () => {
  return (
    <div className='layout-main'>
        <Sidebar />
        <Panels />
    </div>
  )
}

export default Main