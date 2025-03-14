import React from 'react'
import Logo from './Logo'
import SearchInput from './SearchInput'
import Profile from './Profile'
import { BellIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='bg-white layout sticky top-0 z-10'>
        {/* <!-- Logo --> */}
        <Logo />
        
        <div className='flex items-center gap-4 justify-between'>
            <SearchInput />

            <div className='flex items-center gap-4'>
                <div>
                    <BellIcon color='#339cff' size={25} className='hover:cursor-pointer'/>
                </div>

                <Profile />
            </div>
        </div>

    </div>
  )
}

export default Navbar