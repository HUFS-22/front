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
    searchArtist(id)
  },[])

  return (
    <PageWrap style={{display:'flex', flexDirection:'row'}}>
      <div style={{height:'100vh', width: '30%' }}>
        <img src='https://static.talented.co.kr/t_img/service_img/reb/ch_cov_dummy_back.png' style={{ height: '100vh', width: '100%' }} />
        
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