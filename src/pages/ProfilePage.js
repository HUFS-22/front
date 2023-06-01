import React, { useEffect, useState } from 'react'
import { PageContainer, PageWrap } from '../components/styledPage'
import profile from '../assets/images/profile_screen.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Portfolio from '../components/portfolio'

const ProfilePage = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState();

  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

  const searchArtist= async (userId) => {
    try {
      const data = await axios({
        method: 'get',
        url: `${PROXY}/channel/${userId}`,
      })
      console.log(data.data.result);
      setUser(data.data.result)
    } 
    catch(err) {
      alert(err);
    }
  }
  
  useEffect(() => {
    searchArtist(1)
  },[])

  return (
    <PageWrap>
      <div style={{height:'100vh', width: '30%', position:"relative"}}>
        <img src='https://static.talented.co.kr/t_img/service_img/reb/ch_cov_dummy_back.png' style={{ height: '100vh', width: '100%' }} />
        <div style={{ position: 'absolute', bottom: 80, width:'80%', left:40 }}>
          <img src={user && user.profileImageUrl} style={{ borderRadius: '50%', width: 80, height: 80, marginBottom:20, objectFit:'cover'}} />
          <div style={{fontSize:'32px', fontWeight:800, marginBottom:20}}>{user&&user.userName}</div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{border: '1px solid #f6f6f6', borderRadius:10, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:60, width: 200, fontSize:18, fontWeight:600}}>내 프로필 수정</div>
            <img src='https://static.talented.co.kr/t_img/service_img/img_pc/icon/ic_nav_message_24n.png' style={{width:50, height:50}}/>
            <img src='https://static.talented.co.kr/t_img/service_img/img/icon/ic_t_shr_w.png' style={{width:50, height:50}}/>
          </div>
        </div>
      </div>
      <div style={{ width: '70%', backgroundColor: '#f6f6f6' }}>
        <div style={{fontSize:24, paddingBottom:12, marginLeft:15, marginTop:20, fontWeight:800}}>포트폴리오</div>
        <div style={{display:'flex', flexDirection:'row', marginLeft:15, marginRight:15, marginTop:30}}>
          {
            user && user.portfolioList.map((portfolio) => (
              <Portfolio title={portfolio.title} image={portfolio.coverImageUrl}/>
            ))
          }
        </div>
      </div>
    </PageWrap>
  )
}



export default ProfilePage