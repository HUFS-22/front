import React, { useEffect, useState } from 'react'
import { PageContainer, PageWrap } from '../components/styledPage'
import { SearchBox } from './Search'
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from './SearchResult';
import styled from 'styled-components';
import Artist from '../components/artist';
import axios from 'axios';
import Accordian from '../components/accordian';
import RadioFilter from '../data/filtering.json'

const ArtistPage = () => {
  const [searchClick, setSearchClick] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [artistList, setArtistList] = useState([]);

  const [search, setSearch] = useState(location.state);

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [hairHeight, setHairHeight] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [skinColor, setSkinColor] = useState('');
  const [voice, setVoice] = useState('');
  const [driverLicense, setDriverLicense] = useState('');
  const [smoke, setSmoke] = useState('');
  const [image, setImage] = useState('');

  const [filter, setFilter] = useState([]);

  const filtering = (e) => {
    if (filter.includes(e.target.value)) {
      setFilter(filter.filter(feature => feature!=e.target.value))
    }
    else {
      setFilter([...filter,e.target.value])
    }
  }

  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

  const artistSearch = async (search) => {
    try {
      const data = await axios({
        method: 'post',
        url: `${PROXY}/search/artist?q=${search}`,
        data: {
          "keywords": [
            ...filter,
            height,
            weight,
            hairColor,
            hairHeight,
            sex,
            age,
            skinColor,
            voice,
            driverLicense,
            smoke,
            image
          ].filter((f)=>f!='')
        }
      })
      console.log(data)
      if (data.data.code === 200) {
        setArtistList(data.data.result)
      }
    } 
    catch(err) {
      alert(err);
    }
  }
  
  useEffect(() => {
    artistSearch(search)
  },[])

  return (
    <PageWrap>
      <PageContainer>
        <div style={{display:'flex', flexDirection: 'row', height:'100vh'}}>
          <div style={{width:'100%', paddingRight: '12px', borderRight: '1px solid #D6D0D0'}}>
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
              {artistList.length != 0 ? artistList.map((artist) => (
                <Artist belong={artist.belong} job={artist.job} image={artist.profileImageUrl} userName={artist.userName}/>
              )) :
                <div>
                  해당 키워드에 대한 검색 결과가 없습니다.
                </div>
              }
            </ArtistResult>
          </div>
          <FilteringComponent>
            <div style={{width:'100%', display:'flex', flexDirection:'row', marginTop:10, marginBottom:10, justifyContent:'space-between', alignItems:'center'}}>
              <div style={{color: '#726C6C', fontSize: 15, fontWeight: 700 }}>* 아티스트 정보를 구체화할 수 있어요</div>
              <div style={{ fontSize: 10, cursor:'pointer' }} onClick={() => {
                setFilter([])
                setHeight('')
                setWeight('')
                setHairColor('')
                setHairHeight('')
                setSex('')
                setAge('')
                setSkinColor('')
                setVoice('')
                setDriverLicense('')
                setSmoke('')
                setImage('')
              }}>초기화</div>
            </div>
            <Accordian title={"키"} contents={RadioFilter.RadioFilter[0].subTitle} setContent={setHeight} filter={height} IsMultiSelect={false} />
            <Accordian title={"몸무게"} contents={RadioFilter.RadioFilter[1].subTitle} setContent={setWeight} filter={weight} IsMultiSelect={false} />
            <Accordian title={"머리색"} contents={RadioFilter.RadioFilter[2].subTitle} setContent={setHairColor} filter={hairColor} IsMultiSelect={false} />
            <Accordian title={"머리길이"} contents={RadioFilter.RadioFilter[3].subTitle} setContent={setHairHeight} filter={hairHeight} IsMultiSelect={false} />
            <Accordian title={"성별"} contents={RadioFilter.RadioFilter[4].subTitle} setContent={setSex} filter={sex} IsMultiSelect={false} />
            <Accordian title={"나이"} contents={RadioFilter.RadioFilter[5].subTitle} setContent={setAge} filter={age} IsMultiSelect={false} />
            <Accordian title={"인종"} contents={RadioFilter.RadioFilter[6].subTitle} setContent={setSkinColor} filter={skinColor} IsMultiSelect={false}/>
            <Accordian title={"목소리톤"} contents={RadioFilter.RadioFilter[7].subTitle} setContent={setVoice} filter={voice} IsMultiSelect={false}/>
            <Accordian title={"운전면허 소지"} contents={RadioFilter.RadioFilter[8].subTitle} setContent={setDriverLicense} filter={driverLicense} IsMultiSelect={false}/>
            <Accordian title={"흡연 여부"} contents={RadioFilter.RadioFilter[9].subTitle} setContent={setSmoke} filter={smoke} IsMultiSelect={false}/>
            <Accordian title={"이미지"} contents={RadioFilter.RadioFilter[10].subTitle} setContent={setImage} filter={image} IsMultiSelect={false}/>
            <Accordian title={"언어 능력"} contents={RadioFilter.CheckFilter[0].subTitle} IsMultiSelect={true} filtering={filtering} />
            <Accordian title={"역할"} contents={RadioFilter.CheckFilter[1].subTitle} IsMultiSelect={true} filtering={filtering} />
            <Accordian title={"운동"} contents={RadioFilter.CheckFilter[2].subTitle} IsMultiSelect={true} filtering={filtering} />
            <Accordian title={"눈 모양"} contents={RadioFilter.CheckFilter[3].subTitle} IsMultiSelect={true} filtering={filtering} />
            <Accordian title={"사용가능 악기"} contents={RadioFilter.CheckFilter[4].subTitle} IsMultiSelect={true} filtering={filtering} />
            <Accordian title={"가능 지역"} contents={RadioFilter.CheckFilter[5].subTitle} IsMultiSelect={true} filtering={filtering} />
            <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
              <div style={{width:'70%', backgroundColor:'#edecec', display:'flex',justifyContent:'center', borderRadius:10, padding:8, marginTop:10, cursor:'pointer'}} onClick={()=>{artistSearch(search)}}>검색하기</div>
            </div>
          </FilteringComponent>
        </div>
      </PageContainer>
    </PageWrap>
  )
}

export default ArtistPage

const FilteringComponent = styled.div`
  position: sticky;
  width: 30%;
`;

const ArtistResult = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;