import React, { useEffect, useState } from 'react'
import { PageContainer, PageWrap } from '../components/styledPage'
import { SearchBox } from './Search'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Artist from '../components/artist';
import next from '../assets/images/next.png'
import Portfolio from '../components/portfolio';
import axios from 'axios';

const SearchResult = () => {
  const [searchClick, setSearchClick] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [search, setSearch] = useState(location.state);

  const [artistList, setArtistList] = useState([]);
  const [portfolioList, setPortfolioList] = useState([]);

  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

  const totalSearch = async (search) => {
    try {
      const data = await axios({
        method: 'get',
        url: `${PROXY}/search?q=${search}`,
      })
      console.log('통합검색', data);
      if (data.data.code === 200) {
        setArtistList(data.data.result.artistList)
        setPortfolioList(data.data.result.portfolioList)
      }
    } 
    catch(err) {
      alert(err);
    }
}

  useEffect(() => {
    console.log(search)
    totalSearch(search)
  }, [search])
  
  return (
    <PageWrap>
      <PageContainer>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', marginTop:'70px' }}>
          <SearchBox>
            <input
              className='input-style'
              placeholder={searchClick ? '' : '아티스트가 만들어가는 창의적인 검색'}
              onFocus={() => { setSearchClick(true) }}
              onBlur={() => setSearchClick(false)}
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
            <img
              src='https://static.talented.co.kr/t_img/service_img/img_pc/icon/search.png'
              className='icon'
              onClick={() => {
                console.log(search)
                navigate(
                  '/search/result',
                  {state:search}
                )
              }} />
          </SearchBox>
        </div>
        <Menu>
          <div className='menuBox' style={{backgroundColor:'#EDECEC', fontWeight:600}}>통합</div>
          <div className='menuBox' onClick={()=>navigate('/search/result/artist',{state:search})}>아티스트</div>
          <div className='menuBox' onClick={()=>navigate('/search/result/portfolio',{state:search})}>포트폴리오</div>
        </Menu>
        <ResultBox>
          <div className='title'>아티스트</div>
          <div className='artist-result'>
          {artistList.length != 0 ? artistList.map((artist) => (
                <Artist belong={artist.belong} job={artist.job} image={artist.profileImageUrl} userName={artist.userName}/>
              )) :
                <div>
                  해당 키워드에 대한 검색 결과가 없습니다.
                </div>
              }
          </div>
          <div className='more' onClick={()=>navigate('/search/result/artist', {state:search})}>
            아티스트 더보기
            <img src={next} className='arrow-icon'/>
          </div>
        </ResultBox>
        <div style={{marginBottom:'35px'}}/>
        <ResultBox>
          <div className='title'>포트폴리오</div>
          <div className='artist-result'>
          {portfolioList.length != 0 ? portfolioList.map((portfolio) => (
            <Portfolio title={portfolio.title} image={portfolio.coverImageUrl} userName={portfolio.userName} userImage={portfolio.profileImageUrl} />
              )) :
                <div>
                  해당 키워드에 대한 검색 결과가 없습니다.
                </div>
          }
          </div>
          <div className='more' onClick={()=>navigate('/search/result/portfolio',{state:search})}>
            포트폴리오 더보기
            <img src={next} className='arrow-icon'/>
          </div>
        </ResultBox>
        <div style={{marginBottom:'50px'}}/>
      </PageContainer>
    </PageWrap>
  )
}

export default SearchResult

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  margin-bottom: 40px;
  cursor: pointer;

  .menuBox{
    padding: 7px 18px;
    border: 1px solid #D4CDCD;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #726C6C;
  }
`;

const ResultBox = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 1px solid #d4cdcd;

  .title{
    font-size: 23px;
    border-bottom: 1px solid #d4cdcd;
    padding: 7px 20px;
    font-weight: 500;
  }

  .artist-result{
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    padding: 0 10px;
  }
  
  .more{
    display: flex;
    flex-direction: row;
    border-top: 1px solid #d4cdcd;
    padding: 5px 0;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
  }

  .arrow-icon{
    width: 18px;
    height: 18px;
    margin-left: 5px;
  }
`;