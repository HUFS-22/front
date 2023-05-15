import React, { useState } from 'react'
import { PageContainer, PageWrap } from '../components/styledPage'
import styled from 'styled-components'
import Artist from '../components/artist';
import { useNavigate } from 'react-router-dom';

const Search = () => {
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
        <div>
          <div style={{ fontSize: '25px', fontWeight: 900, marginBottom: '24px', marginTop: '60px' }}>탤런티드 아티스트</div>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap'}}>
            <Artist />
            <Artist />
            <Artist/>
            <Artist/>
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
          </div>
        </div>
      </PageContainer>
    </PageWrap>
  )
}

export default Search

export const SearchBox = styled.div`
  width: 700px;
  border-bottom: 5px solid #e8e8e8;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;

  .input-style{
    width: 90%;
    border: none;
    font-size: 24px;
    font-weight: 800;
  }
  input:focus{
    outline: none;
  }
  input::placeholder{
    color: #999999;
    font-size: 24px;
    font-weight: 800;
  }

  .icon{
    width: 32px;
    height: 32px;
    object-fit: contain;
    cursor: pointer;
  }
`;