import { ArrowRight, Users } from 'lucide-react'
import React from 'react'

const PanelCard = ({className}) => {
  return (
    <div className={`${className} rounded-lg p-5`}>
        <div className='flex items-center gap-4'>
            <div className='bg-white h-14 w-14 rounded-full flex items-center justify-center'>
                <Users />
            </div>
            <div>
                <p className='text-gray-200 text-sm font-light tracking-wider'>Total Patients</p>
                <p className='text-2xl text-white font-bold'>100K</p>
            </div>
        </div>

        <a href='#' className='flex items-center gap-1 mt-5'>
            <p className='text-stone-100 text-sm tracking-wider'>View details</p>
            <ArrowRight  className='stroke-gray-100' size={20}/>
        </a>
    </div>
  )
}

export default PanelCard