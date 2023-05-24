import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { PageContainer, PageWrap } from '../components/styledPage';
import PortfolioDetail from '../components/portfolioDetail';

const PortfolioDetailPage = () => {

  const {id} = useParams();
  console.log("id : ", id);

  const [portfolioData, setPortfolioData] = useState({})

  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

  const searchPortfolio= async (id) => {
      try {
        const data = await axios({
          method: 'get',
          url: `${PROXY}/portfolio/${id}`,
        })
        console.log(data);
        setPortfolioData(data.data.result)
      } 
      catch(err) {
        alert(err);
      }
  }
  
  useEffect(() => {
    searchPortfolio(id)
  },[])

  return (
    <PageWrap>
      <PageContainer style={{display:'flex', justifyContent:'center'}}>
        <PortfolioDetail title={portfolioData.title} hashTags={portfolioData.hashTags} coverImageUrl={portfolioData.coverImageUrl}/>
      </PageContainer>
    </PageWrap>
  )
}

export default PortfolioDetailPage