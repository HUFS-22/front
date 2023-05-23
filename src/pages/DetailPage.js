import React, { useEffect, useState } from 'react'
import { PageContainer, PageWrap } from '../components/styledPage'
import styled from 'styled-components'
import Modal from '../components/modal';
import filering_icon from '../assets/images/filtering.svg'
import axios from 'axios';

const DetailPage = () => {

  const [filterModal, setFilterModal] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [profile, setProfile] = useState({});

  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

  const getProfile = async (userId) => {
    try {
      const data = await axios({
        method: 'get',
        url: `${PROXY}/channel/${userId}`,
      })
      console.log(data);
      if (data.data.code === 200) {
        setProfile(data.data.result)
      }
    } 
    catch(err) {
      alert(err);
    }
  }

  const isFiltered = async (userId) => {
    try {
      const data = await axios({
        method: 'get',
        url: `${PROXY}/artist-keyword/${userId}`,
      })
      console.log(data);
      if (data.data.code === 200) {
        if (data.data.result.length != 0) {
          setIsFilter(true)
        } 
      }
      else {
        setIsFilter(false)
      }
    } 
    catch(err) {
      alert(err);
    }
  }

  useEffect(() => {
    isFiltered(1)
    getProfile(1)
  },[])

  return (
      <PageWrap>
        <PageContainer>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', marginTop:80}}>
            <div style={{ display: 'grid', width: '60%', gridTemplateColumns: '200px 200px 200px', gridTemplateRows: '200px 200px 200px 200px 200px', gridGap: 13, height:'100%'}}>
              <DetailBox style={{ gridRowStart: 1, gridRowEnd: 3, position: 'relative'}}>
                <img src='https://static.talented.co.kr/t_img/service_img/img/icon/ic_t_ch_cover.png' style={{borderRadius:'50%', position:'absolute', top:5, left:5, width:40, height:40}}/>
                <img src='https://static.talented.co.kr/t_img/service_img/reb/ch_cov_dummy_back.png' style={{ borderRadius: 18, width: '100%', height: '100%', objectFit: 'cover', zIndex:0 }} />
                <div style={{ position: 'absolute', bottom: '50%', alignSelf: 'center', textAlign: 'center', left: 50, color: '#FFFFFF', fontSize: 20 }}>이미지를<br />등록해주세요</div>
                <div style={{position:'absolute', bottom:10, backgroundColor:'#959595', borderRadius: 10, padding:13, left:33, color:'#FFFFFF'}}>커버 이미지 변경</div>
              </DetailBox>
              <DetailBox style={{ gridRowStart: 1, gridRowEnd: 3, position:'relative'}}>
                <img src='https://static.talented.co.kr/t_img/service_img/img/icon/ic_t_ch_cover.png' style={{borderRadius:'50%', width:40, height:40, margin:5}}/>
                <div className='title-text' style={{marginLeft:10}}>프로필 사진</div>
                <div style={{position:'absolute', bottom:10, backgroundColor:'#959595', borderRadius: 10, padding:13, left:28, color:'#FFFFFF'}}>프로필 이미지 변경</div>
              </DetailBox>
              <DetailBox>
                <div style={{display:'flex', flexDirection:'column', marginTop:10, marginLeft:15, justifyContent:'center'}}>
                  <img src='https://static.talented.co.kr/t_img/service_img/img/icon/ic_t_ch_cover.png' style={{ borderRadius: '50%', width: 40, height: 40}} />
                  <div className='title-text'>상태</div>
                  <div style={{color:'#cbcbcb', fontWeight:700, marginTop:12}}>없음</div>
                </div>
              </DetailBox>
              <DetailBox>
                <div style={{display:'flex', flexDirection:'column', marginTop:10, marginLeft:15, justifyContent:'center'}}>
                  <img src='https://static.talented.co.kr/t_img/service_img/img/icon/ic_t_ch_cover.png' style={{ borderRadius: '50%', width: 40, height: 40}} />
                  <div className='title-text'>소속</div>
                  <div style={{color:'#cbcbcb', fontWeight:700, marginTop:12}}>없음</div>
                </div>
              </DetailBox>
              <DetailBox style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
              <div style={{display:'flex', flexDirection:'column', marginTop:10, marginLeft:15, justifyContent:'center'}}>
                  <img src='https://static.talented.co.kr/t_img/service_img/img/icon/ic_t_ch_cover.png' style={{ borderRadius: '50%', width: 40, height: 40}} />
                  <div className='title-text'>자기소개</div>
                  <div style={{color:'#cbcbcb', fontWeight:700, marginTop:12}}>없음</div>
                </div>
              </DetailBox>
              <DetailBox>
                <div style={{display:'flex', flexDirection:'column', marginTop:10, marginLeft:15, justifyContent:'center'}}>
                  <img src='https://static.talented.co.kr/t_img/service_img/img/icon/ic_t_ch_cover.png' style={{ borderRadius: '50%', width: 40, height: 40}} />
                  <div className='title-text'>직업</div>
                  <div style={{color:'#cbcbcb', fontWeight:700, marginTop:12}}>없음</div>
                </div>
              </DetailBox>
              <DetailBox>
                <div style={{display:'flex', flexDirection:'column', marginTop:10, marginLeft:15, justifyContent:'center'}}>
                  <img src='https://static.talented.co.kr/t_img/service_img/img/icon/ic_t_ch_cover.png' style={{ borderRadius: '50%', width: 40, height: 40}} />
                  <div className='title-text'>지역</div>
                  <div style={{color:'#cbcbcb', fontWeight:700, marginTop:12}}>없음</div>
                </div>
              </DetailBox>
              <DetailBox>
                <div style={{display:'flex', flexDirection:'column', marginTop:10, marginLeft:15, justifyContent:'center'}}>
                  <img src='https://static.talented.co.kr/t_img/service_img/img/icon/ic_t_ch_cover.png' style={{ borderRadius: '50%', width: 40, height: 40}} />
                  <div className='title-text'>소셜</div>
                  <div style={{color:'#cbcbcb', fontWeight:700, marginTop:12}}>없음</div>
                </div>
              </DetailBox>
              <DetailBox>
                <div style={{display:'flex', flexDirection:'column', marginTop:10, marginLeft:15, justifyContent:'center'}}>
                  <img src='https://static.talented.co.kr/t_img/service_img/img/icon/ic_t_ch_cover.png' style={{ borderRadius: '50%', width: 40, height: 40}} />
                  <div className='title-text'>학력</div>
                  <div style={{color:'#cbcbcb', fontWeight:700, marginTop:12}}>없음</div>
                </div>
              </DetailBox>
              <DetailBox>
                <div style={{display:'flex', flexDirection:'column', marginTop:10, marginLeft:15, justifyContent:'center'}}>
                  <img src='https://static.talented.co.kr/t_img/service_img/img/icon/ic_t_ch_cover.png' style={{ borderRadius: '50%', width: 40, height: 40}} />
                  <div className='title-text'>경력</div>
                  <div style={{color:'#cbcbcb', fontWeight:700, marginTop:12}}>없음</div>
                </div>
              </DetailBox>
              <DetailBox>
                <div style={{display:'flex', flexDirection:'column', marginTop:10, marginLeft:15, justifyContent:'center'}}>
                  <img src='https://static.talented.co.kr/t_img/service_img/img/icon/ic_t_ch_cover.png' style={{ borderRadius: '50%', width: 40, height: 40}} />
                  <div className='title-text'>수상</div>
                  <div style={{color:'#cbcbcb', fontWeight:700, marginTop:12}}>없음</div>
                </div>
              </DetailBox>
              <DetailBox onClick={()=>setFilterModal(true)}>
                <div style={{display:'flex', flexDirection:'column', marginTop:10, marginLeft:15, justifyContent:'center'}}>
                  <img src={filering_icon} style={{ borderRadius: '50%', width: 40, height: 40}} />
                  <div className='title-text'>캐스팅 확률 UP</div>
                  <div style={{color:'#cbcbcb', fontWeight:700, marginTop:12}}>{isFilter?'정보입력완료':'없음'}</div>
                </div>
              </DetailBox>
            </div>
            <div style={{width:'35%'}}>
            <DetailBox style={{ width: 300, height: 350, padding:20, display:'flex', justifyContent:'space-between', flexDirection:'column' }}>
              <div>
                <div style={{ fontSize: 30, fontWeight: 900 }}>{profile.userName}</div>
                <div style={{fontSize:17}}>{profile.belong}</div>
                <div style={{fontSize:17}}>{profile.job}</div>
              </div>
              <div style={{width:'100%', backgroundColor:'#000000', justifyContent:'center', color:'#FFFFFF', borderRadius:5, display:'flex', height:50, alignItems:'center', fontSize:20, fontWeight:600,}}>저장</div>
            </DetailBox>
            </div>
          </div>
        </PageContainer>
      {filterModal && <Modal setFilterModal={setFilterModal} />}
      </PageWrap>
  )
}

export default DetailPage

const DetailBox = styled.div`
  border: 1px solid #dcdbdb;
  border-radius: 20px;
  cursor: pointer;

  .title-text{
    font-size: 18px;
    font-weight: 900;
    margin-top: 20px;
  }

`;