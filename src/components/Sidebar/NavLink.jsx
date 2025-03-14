import React from 'react'
import { HomeIcon } from 'lucide-react'
import PropTypes from 'prop-types'

const NavLink = ({label, link, isActive, icon, className}) => {
  return (

    <a href={link} className={`inline-flex w-full py-0.5 items-center gap-3 sidebar-link-hover ${className} ${isActive ? 'link-active' : ''}`}>
        {icon}
        <p className='text-[14px] font-medium text-gray-700'>{label}</p>
    </a>

  )
}

NavLink.defaultProps = {
    label: 'Home',
    link: '#',
    isActive: false,
    icon: <HomeIcon size={18}  className='stroke-gray-700'/>
}

NavLink.propTypes = {
    label:PropTypes.string,
    link: PropTypes.string,
    isActive: PropTypes.bool,
    icon: PropTypes.element,
}

export default NavLink