import React, { useState } from 'react'
import { PageContainer, PageWrap } from '../components/styledPage'
import styled from 'styled-components'
import Artist from '../components/artist';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchClick, setSearchClick] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

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
              onChange={(e)=>setSearch(e.target.value)}
            />
            <img
              src='https://static.talented.co.kr/t_img/service_img/img_pc/icon/search.png'
              className='icon'
              onClick={() => {
                console.log(search)
                if (search == '') {
                  alert('검색어를 입력해주세요')
                } else {
                  navigate(
                    '/search/result',
                    {state:search}
                  )
                }
              }} />
          </SearchBox>
        </div>
        <div>
          <div style={{ fontSize: '25px', fontWeight: 900, marginBottom: '24px', marginTop: '60px' }}>탤런티드 아티스트</div>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap'}}>
            <Artist image={'https://static.talented.co.kr/user_data/ss_k2652514396/profile_image/7d2781d8-5f67-4df1-9547-9ca85085ccfd.jpeg?w=300&h=300'} belong={'프리랜서'} job='모델' userName={'이진결'}/>
            <Artist image='https://static.talented.co.kr/user_data/rlatnwls3980/profile_image/b700bdf9-b79a-499d-88de-7f17b1f38e63.jpeg?w=300&h=300' belong={'소속회사(플러스앤파트너스)'} job={'모델,배우 지망생'} userName={'김수진'}/>
            <Artist image='https://static.talented.co.kr/user_data/kgr613/profile_image/a735e33a-3cbd-410d-b853-10fdb418569d.jpeg?w=300&h=300' belong={'프리랜서'} job='모델,연기자' userName={'김가령'}/>
            <Artist image={'https://static.talented.co.kr/user_data/sjyrhdwnsla/profile_image/b5060cb8-3846-4e3c-ad71-c1dd646c2e88.jpeg?w=300&h=300'} belong={'프리랜서'} job='모델' userName={'서주영'}/>
            <Artist image={'https://static.talented.co.kr/user_data/rahi140411/profile_image/a02a8bc5-6dae-45c5-ac38-67d379e391ef.png?w=300&h=300'} belong={'학생(초등학생)'} job='배우,뮤지션' userName={'권라희'}/>
            <Artist image={'https://static.talented.co.kr/user_data/Suin412/profile_image/318ecea1-84d1-43b2-b18e-3c31e8bc0487.jpeg?w=300&h=300'} belong={'프리랜서'} job='발레리나,모델' userName={'신수인'} />
            <Artist image={'https://static.talented.co.kr/user_data/godiadl/profile_image/1486078b-32bc-4a55-8105-258fe78e1308.jpeg?w=300&h=300'} belong={'프리랜서'} job='모델,댄서' userName={'최혜승'} />
            <Artist image={'https://static.talented.co.kr/user_data/hmk71799/profile_image/e83a8e10-5131-4179-9d69-421afbf5128a.jpeg?w=300&h=300'} belong={'학생(대학생)'} userName={'황미경'} />
            <Artist image={'https://static.talented.co.kr/user_data/hijong5280/profile_image/6313a80b-4991-4699-b969-99021ede5b67.jpeg?w=300&h=300'} belong={'프리랜서'} job='모델' userName={'박선영'}/>
            <Artist image={'https://static.talented.co.kr/user_data/loveyeon9236/profile_image/af4a25fb-aef5-48de-8143-2b50f54c715d.jpeg?w=300&h=300'} belong={'프리랜서'} job='모델' userName={'김선영'}/>
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