import React, { useState } from 'react'
import { PageContainer, PageWrap } from '../components/styledPage'
import { SearchBox } from './Search'
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from './SearchResult';
import styled from 'styled-components';
import Artist from '../components/artist';

const ArtistPage = () => {
  const [searchClick, setSearchClick] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [search, setSearch] = useState(location.state);

  return (
    <PageWrap>
      <PageContainer>
        <div style={{display:'flex', flexDirection: 'row'}}>
          <div style={{width:'76%', paddingRight: '12px', borderRight: '1px solid #D6D0D0'}}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', marginTop:'70px' }}>
              <SearchBox>
                <input className='input-style' placeholder={searchClick?'':'아티스트가 만들어가는 창의적인 검색'} onFocus={()=>{setSearchClick(true)}} onBlur={()=>setSearchClick(false)} value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <img src='https://static.talented.co.kr/t_img/service_img/img_pc/icon/search.png' className='icon' onClick={()=>navigate('/search/result',{state:search})}/>
              </SearchBox>
            </div>
            <Menu>
              <div className='menuBox' onClick={()=>navigate('/search/result',{state:search})}>통합</div>
              <div className='menuBox' style={{backgroundColor:'#EDECEC', fontWeight:600}}>아티스트</div>
              <div className='menuBox' onClick={()=>navigate('/search/result/portfolio',{state:search})}>포트폴리오</div>
            </Menu>
            <div style={{ fontSize: '25px', fontWeight: 900, marginBottom: '24px', marginTop: '40px' }}>아티스트</div>
            <ArtistResult>
              <Artist />
              <Artist/>
              <Artist/>
              <Artist />
              <Artist />
              <Artist />
              <Artist/>
              <Artist/>
            </ArtistResult>
          </div>
          <FilteringComponent>
            필터링 구간
          </FilteringComponent>
        </div>
      </PageContainer>
    </PageWrap>
  )
}

export default ArtistPage

const FilteringComponent = styled.div`
  position: sticky;
`;

const ArtistResult = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;