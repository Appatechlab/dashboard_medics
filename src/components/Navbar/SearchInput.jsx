import React from 'react'
import { Search } from 'lucide-react'

const SearchInput = () => {
  return (
    <div>
        <form action="">
                <div className='flex gap-1 items-center border-b border-gray-400'>
                    <Search color='#339cff'/>
                        <input type="search" name="" id="" placeholder='Find prescription, medicines, poly etc' className='w-72 p-2 border-none outline-none placeholder:text-sm'/>
                </div>
            </form>
    </div>
  )
}

export default SearchInput