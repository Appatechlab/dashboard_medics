import React from 'react'
import Panels from './Panels/Panels'
import Sidebar from './Sidebar/Sidebar'

const Main = () => {
  return (
    <div className='layout-main'>
        <Sidebar />
        <Panels />
    </div>
  )
}

export default Main