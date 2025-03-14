import React from 'react'
import { Search } from 'lucide-react'

const SearchInput = () => {
  return (
    <div className='max-[500px]:hidden'>
        <form action="">
                <div className='flex gap-1 items-center border-b border-gray-400'>
                    <Search color='#339cff'/>
                        <input type="search" name="" id="" placeholder='Find prescription, medicines' className='w-56 sm:w-60 md:w-72 p-2 border-none outline-none placeholder:text-sm'/>
                </div>
            </form>
    </div>
  )
}

export default SearchInput