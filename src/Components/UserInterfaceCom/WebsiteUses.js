import React from 'react'
import '../../Pages/UserInterface/Userinterface.css'

const WebsiteUses = ({icon, title, description}) => {
  return (
    <div className='Website-Uses'>
      {icon}
      <p className='Website-Uses1'>{title}</p>
      <p className='Website-Uses2'>{description}</p>
    </div>
  )
}

export default WebsiteUses