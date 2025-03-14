import React from 'react'
import { EllipsisVertical } from 'lucide-react'

const VaccinatedPersonCard = () => {
  return (
    <div className='flex gap-3 items-center w-full'>
        <div className='border-2 border-gray-200 w-12 h-12 rounded-full shrink-0'>
            <img src="" alt="" />
        </div>
        <div className='flex justify-between items-center w-full'>
            <div>
                <p className='text-sm font-bold'>Benedict Appati</p>
                <p className='text-xs text-gray-500 pt-0.5'>09:00 - 10:00</p>
            </div>
            <div className='h-8 w-8 flex items-center justify-center'>
                <EllipsisVertical size={16}/>
            </div>
        </div>
    </div>
  )
}

export default VaccinatedPersonCard