import React from 'react'
import '../../Pages/UserInterface/Userinterface.css'

const ImageFeatureDiscription = ({Title, ImagePath}) => {
  return (
    <div className='Image-Feature-Discription'>
        <p className='cashInformation1'>{Title}</p>
        <img className='Image-Feature' src={ImagePath}/>
    </div>
  )
}

export default ImageFeatureDiscription