import React from 'react'

const MedsCard = ({bgColor, textColor, heading, date, listNumber}) => {
  return (
    <div className={`rounded-lg px-4 py-3 ${bgColor}`}>
        <h2 className={`font-bold text-lg flex items-baseline gap-2 ${textColor}`}>
            <span>{listNumber}</span>
            <span className='tracking-wider'>{heading}</span>
        </h2>
        <p className={`pl-[22px] text-xs mt-1 ${textColor} font-normal`}>{date}</p>
    </div>
  )
}

export default MedsCard