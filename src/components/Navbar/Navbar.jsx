import React from 'react'
import Logo from './Logo'
import SearchInput from './SearchInput'
import Profile from './Profile'
import { BellIcon, Search } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='bg-white layout sticky top-0 z-10'>
        {/* <!-- Logo --> */}
        <Logo />
        
        <div className='flex items-center gap-4 justify-end min-[500px]:justify-between'>
            <SearchInput />

            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-4'>
                  <Search color='#339cff' className="sm:hidden"/>
                    <BellIcon color='#339cff' size={25} className='hover:cursor-pointer'/>
                </div>

                <Profile />
            </div>
        </div>

    </div>
  )
}

export default Navbar