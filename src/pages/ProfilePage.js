import React from 'react'
import { PageContainer, PageWrap } from '../components/styledPage'
import profile from '../assets/images/profile_screen.png'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {

  const navigate = useNavigate();
  
  return (
    <div style={{ position:'relative'}}>
      <img src={profile} style={{ objectFit: 'contain', width: '100%' }} />
      <div style={{ position:'absolute',width:240, height:60, bottom:30, left:20, cursor:'pointer'}} onClick={()=>navigate('/detail')}/>
      </div>
  )
}

export default ProfilePage