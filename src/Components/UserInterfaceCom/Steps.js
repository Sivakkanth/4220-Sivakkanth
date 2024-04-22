import React from 'react'
import '../../Pages/UserInterface/Userinterface.css'

const Steps = ({icon, title, description}) => {
  return (
    <div className='Steps-Details'>
      <div style={{backgroundColor:'#BBF6C6', height:'40px', width:"40px", borderRadius:'20px', padding:'5px'}}>
        {icon}
      </div>
      <p className='cashInformation1' style={{textAlign:'center'}}>{title}</p>
      <p className='cashInformation2' style={{textAlign:'center'}}>{description}</p>
    </div>
  )
}

export default Steps
