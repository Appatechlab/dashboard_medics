import React from 'react'
import NavLink from './NavLink'
import ActivityIcon from './ActivityIcon'
import CalenderIcon from './CalenderIcon'
import PulseIcon from './PulseIcon'
import { Home, LayoutDashboardIcon, LogOutIcon, Settings } from 'lucide-react'

function Sidebar() {
  return (
    <div className='bg-white py-5 pl-8 h-[87vh] rounded-2xl sticky top-[5.25rem]'>
        <h2 className='font-bold text-[15px]'>Menu</h2>

        <div className='flex flex-col gap-5 mt-5'>
            <NavLink label={"Dashboard"} link={"#"} isActive={true} icon={<Home size={20} />}/>
            <NavLink label={"Appointments"} link={"#"} icon={<CalenderIcon />}/>
            <NavLink label={"Pharmacy"} link={"#"} icon={<PulseIcon />}/>
            <NavLink label={"Activity"} link={"#"} icon={<ActivityIcon />}/>
            <NavLink label={"Reports"} link={"#"} icon={<LayoutDashboardIcon size={20}/>}/>
            <NavLink label={"Settings"} link={"#"} icon={<Settings size={20}/>}/>
        </div>
        
        <NavLink label={"Logout"} link={"#"} icon={<LogOutIcon size={20}/>} className='absolute bottom-5'/>
    </div>
  )
}


export default Sidebar