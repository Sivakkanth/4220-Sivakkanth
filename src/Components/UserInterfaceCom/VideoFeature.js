import React from 'react'
import '../../Pages/UserInterface/Userinterface.css'

const VideoFeature = ({title, videopath}) => {
  return (
    <div className='Video-Feature-Discription'>
      <video controls className='video-player'>
        <source src={videopath} type='video/mp4'/>
      </video>
      <p className='video-description'>{title}</p>
    </div>
  )
}

export default VideoFeature