import React from 'react'
import Panels from './Panels/Panels'
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'

const Main = () => {
    const [toggle, setToggle] = React.useState(false)
    const handleToggle = () => {setToggle(!toggle)}
    document.addEventListener('click', (event) => {
        const menu = document.querySelector('.menu')
        if (!menu.contains(event.target)) {
            setToggle(false)
        }
    })
    return (
        <div className=''>
            <div onClick={handleToggle} className='absolute top-[6.5rem] right-4 min-[1280px]:hidden cursor-pointer menu'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>menu-2-outline</title><g fill="#323ebd"><g data-name="Layer 2"><g data-name="menu-2"><circle cx="4" cy="12" r="1"></circle><rect x="7" y="11" width="14" height="2" rx=".94" ry=".94"></rect><rect x="3" y="16" width="18" height="2" rx=".94" ry=".94"></rect><rect x="3" y="6" width="18" height="2" rx=".94" ry=".94"></rect></g></g></g></svg>
            </div>
            <Navbar />
            
            <div className='layout-main -mt-5 min-[1280px]:mt-2'>
                <div className='min-[1280px]:hidden block'>
                    { toggle && <Sidebar toggle={toggle}/> }
                </div>
                <div className= ''>
                    <Sidebar toggle={false} />
                </div>
                <Panels />
            </div>
        </div>
    )
}

export default Main