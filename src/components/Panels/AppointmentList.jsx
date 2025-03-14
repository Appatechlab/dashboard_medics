import React from 'react'

const AppointmentList = ({title, time, doctor, icon, bgColor, textColor}) => {
  return (
    <div className={`flex gap-5 ${bgColor} rounded-xl p-4`}>
        <div className='shrink-0'>
            <img src={icon} alt="" className='w-10'/>
        </div>
        <div className='space-y-0.5'>
            <h3 className={`text-lg font-bold tracking-wider ${textColor}`}>{title}</h3>
            <p className={`text-xs ${textColor}`}>{time}</p>
            <p className={`text-sm ${textColor}`}>{doctor}</p>
        </div>
    </div>
  )
}

export default AppointmentList