import React from 'react'
import ProfileImage from "../../assets/profile_image.jpg"
import { ChevronDown, ChevronUp } from 'lucide-react'
const Profile = () => {
  return (
    <div className='flex items-center gap-2 bg-stone-50 hover:bg-stone-100 hover:cursor-pointer p-1.5 rounded-lg'>
        <div className='h-10 w-10 rounded-full overflow-hidden border-2 border-green-600'>
            <img src={ProfileImage} alt="profile" className='w-full h-full object-cover object-top'/>
        </div>
        <div>
            <p className='text-sm font-medium'>Appati Benedict</p>
            <p className='text-gray-500 text-xs'>Admin</p>
        </div>
        <div>
            <ChevronUp size={15}/>
            <ChevronDown size={15} className='-mt-1'/>
        </div>
    </div>
  )
}

export default Profile