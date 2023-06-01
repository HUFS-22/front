import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { PageContainer, PageWrap } from '../components/styledPage';
import Portfolio from '../components/portfolio';

const ArtistDetailPage = () => {

  const {id} = useParams();
  console.log("id : ", id);

  const [artistData, setArtistData] = useState({})

  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

  const searchArtist= async (userId) => {
      try {
        const data = await axios({
          method: 'get',
          url: `${PROXY}/channel/${userId}`,
        })
        console.log(data.data.result);
        setArtistData(data.data.result)
      } 
      catch(err) {
        alert(err);
      }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    searchArtist(id)
  },[])

  return (
    <PageWrap style={{display:'flex', flexDirection:'row'}}>
      <div style={{height:'100vh', width: '30%', position:"relative"}}>
        <img src='https://static.talented.co.kr/t_img/service_img/reb/ch_cov_dummy_back.png' style={{ height: '100vh', width: '100%' }} />
        <div style={{ position: 'absolute', bottom: 80, width:'80%', left:40 }}>
          <img src={artistData.profileImageUrl} style={{ borderRadius: '50%', width: 80, height: 80, marginBottom:20, objectFit:'cover'}} />
          <div style={{fontSize:'32px', fontWeight:800, marginBottom:20}}>{artistData.userName}</div>
          <div style={{fontSize:16, marginBottom:20}}>{artistData.job}</div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{border: '1px solid #f6f6f6', borderRadius:10, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:60, width: 200, fontSize:18, fontWeight:600}}>팔로우</div>
            <img src='https://static.talented.co.kr/t_img/service_img/img_pc/icon/ic_nav_message_24n.png' style={{width:50, height:50}}/>
            <img src='https://static.talented.co.kr/t_img/service_img/img/icon/ic_t_shr_w.png' style={{width:50, height:50}}/>
          </div>
        </div>
      </div>
      <div style={{ width: '70%', backgroundColor: '#f6f6f6' }}>
        <div style={{fontSize:24, paddingBottom:12, marginLeft:15, marginTop:20, fontWeight:800}}>포트폴리오</div>
        <div style={{display:'flex', flexDirection:'row', marginLeft:15, marginRight:15, marginTop:30}}>
          {
            artistData.portfolioList && artistData.portfolioList.map((portfolio) => (
              <Portfolio title={portfolio.title} image={portfolio.coverImageUrl}/>
            ))
          }
        </div>
      </div>
    </PageWrap>
  )
}

export default ArtistDetailPage