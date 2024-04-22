import React from 'react'
import '../../Pages/UserInterface/Userinterface.css'
import { MdStars } from "react-icons/md";

const CashCecorationInformation = ({inform1, inform2}) => {
  return (
    <div className='userinterface-cash-perinformations'>
      <MdStars color='lightgreen'/>
      <p className='cashInformation1'>{inform1}</p>
      <p className='cashInformation2'>{inform2}</p>
    </div>
  )
}

export default CashCecorationInformation
