import React, { useEffect, useState } from 'react'
import { PageContainer, PageWrap } from '../components/styledPage'
import { SearchBox } from './Search'
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from './SearchResult';
import styled from 'styled-components';
import Portfolio from '../components/portfolio';
import axios from 'axios';

const PortfolioPage = () => {
  const [searchClick, setSearchClick] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [search, setSearch] = useState(location.state);

  const [portfolioList, setPortfolioList] = useState([]);

  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
  
  const portfolioSearch = async (search) => {
    try {
      const data = await axios({
        method: 'get',
        url: `${PROXY}/search/portfolio?q=${search}`,
      })
      console.log(data);
      if (data.data.code === 200) {
        setPortfolioList(data.data.result)
      }
    } 
    catch(err) {
      alert(err);
    }
  }
  
  useEffect(() => {
    portfolioSearch(search)
  },[search])

  return (
    <PageWrap>
      <PageContainer>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', marginTop:'70px' }}>
              <SearchBox>
                <input className='input-style' placeholder={searchClick?'':'아티스트가 만들어가는 창의적인 검색'} onFocus={()=>{setSearchClick(true)}} onBlur={()=>setSearchClick(false)} value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <img src='https://static.talented.co.kr/t_img/service_img/img_pc/icon/search.png' className='icon' onClick={()=>navigate('/search/result',{state:search})}/>
              </SearchBox>
            </div>
            <Menu>
              <div className='menuBox' onClick={()=>navigate('/search/result',{state:search})}>통합</div>
              <div className='menuBox' onClick={()=>navigate('/search/result/artist',{state:search})}>아티스트</div>
              <div className='menuBox' style={{backgroundColor:'#EDECEC', fontWeight:600}}>포트폴리오</div>
          </Menu>
        <div style={{ fontSize: '25px', fontWeight: 900, marginBottom: '24px', marginTop: '40px' }}>포트폴리오</div>
        <PortfolioResult>
        {portfolioList.length != 0 ? portfolioList.map((portfolio) => (
            <Portfolio title={portfolio.title} image={portfolio.coverImageUrl} userName={portfolio.userName} userImage={portfolio.profileImageUrl} />
              )) :
                <div>
                  해당 키워드에 대한 검색 결과가 없습니다.
                </div>
          }
        </PortfolioResult>
      </PageContainer>
    </PageWrap>
  )
}

export default PortfolioPage

const PortfolioResult = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
