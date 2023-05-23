import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { PageContainer, PageWrap } from '../components/styledPage';

const PortfolioDetailPage = () => {

  const location = useLocation();
  console.log(location)

  const searchPortfolio= async (id) => {
      try {
        const data = await axios({
          method: 'get',
          url: '/portfolio/1',
        })
        console.log(data);
      } 
      catch(err) {
        alert(err);
      }
  }
  
  useEffect(() => {
    searchPortfolio()
  },[])

  return (
    <PageWrap>
      <PageContainer>
        PortfolioDetailPage
      </PageContainer>
    </PageWrap>
  )
}

export default PortfolioDetailPage