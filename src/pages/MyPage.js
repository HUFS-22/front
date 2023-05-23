import React from 'react'
import { PageContainer, PageWrap } from '../components/styledPage'
import mypage_screen from '../assets/images/mypage_screen.png'
import { useNavigate } from 'react-router-dom'

const MyPage = () => {

  const navigate = useNavigate();

  return (
    <PageWrap>
        <div style={{position:'relative'}}>
          <img src={mypage_screen} style={{ objectFit: 'contain', width:'100%'}} />
          <div onClick={()=>{navigate('/profile')}} style={{position:'absolute', right:500, width:250, height:50, top:60, cursor:'pointer'}}/>
        </div>
    </PageWrap>
  )
}

export default MyPage