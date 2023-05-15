import React, { useState } from 'react'
import { PageContainer, PageWrap } from '../components/styledPage'
import { SearchBox } from './Search'
import { useNavigate } from 'react-router-dom';
import { Menu } from './SearchResult';
import styled from 'styled-components';

const PortfolioPage = () => {
  const [searchClick, setSearchClick] = useState(false);
  const navigate = useNavigate();

  return (
    <PageWrap>
      <PageContainer>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', marginTop:'70px' }}>
              <SearchBox>
                <input className='input-style' placeholder={searchClick?'':'아티스트가 만들어가는 창의적인 검색'} onFocus={()=>{setSearchClick(true)}} onBlur={()=>setSearchClick(false)}/>
                <img src='https://static.talented.co.kr/t_img/service_img/img_pc/icon/search.png' className='icon' onClick={()=>navigate('/search/result')}/>
              </SearchBox>
            </div>
            <Menu>
              <div className='menuBox' onClick={()=>navigate('/search/result')}>통합</div>
              <div className='menuBox' onClick={()=>navigate('/search/result/artist')}>아티스트</div>
              <div className='menuBox' style={{backgroundColor:'#EDECEC', fontWeight:600}}>포트폴리오</div>
          </Menu>
          <div style={{ fontSize: '25px', fontWeight: 900, marginBottom: '24px', marginTop: '40px' }}>포트폴리오</div>
      </PageContainer>
    </PageWrap>
  )
}

export default PortfolioPage
