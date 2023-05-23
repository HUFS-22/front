import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Modal = ({ setFilterModal }) => {
  const [filter, setFilter] = useState([]);
  const [sex, setSex] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [driverLicense, setDriverLicense] = useState('');
  const [smoke, setSmoke] = useState('');
  const [hair, setHair] = useState('');
  const [skin, setSkin] = useState('');
  const [voice, setVoice] = useState('');
  const [residence, setResidence] = useState('');
  const [ableCountry, setAbleCountry] = useState('');

  const filtering = (e) => {
    if (filter.includes(e.target.value)) {
      setFilter(filter.filter(feature => feature!=e.target.value))
    }
    else {
      setFilter([...filter,e.target.value])
    }
  }

  const radioFiltering = (e) => {
    setSex(e.target.value)
  }

  useEffect(() => {
    console.log(filter)
  }, [filter])
  
  return (
    <>
      <ModalWrap>
        <ModalBackdrop>
          <div style={{position:'absolute', top:10, right:10, cursor:'pointer'}} onClick={()=>setFilterModal(false)}>닫기</div>
          <ModalBox>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%', borderBottom:'1px solid #e6e6e6', marginTop:15, paddingBottom:15}}>
              <div className='title-text' style={{marginLeft:15}}>기타 카테고리</div>
              <button className='title-text' style={{marginRight:15, color:'#FF1B3F', backgroundColor:'transparent', border:0}} disabled={filter.length==0} >저장</button>
            </div>
            <div style={{padding:30}}>
              <div className='filter-title'>본인에 해당하는 항목을 선택해주세요</div>
              <div style={{ color: '#989898', fontWeight: 600, fontSize: 17, marginTop: 20, lineHeight: '25px' }}>더 좋은 캐스팅 제안을 드리기 위해 사용되며,<br />나의 정보가 밖으로 노출되지 않아요.</div>
              <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>성별</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  <label><input type='radio' onChange={radioFiltering} value={'남'} checked={sex === '남'}/>남</label>
                  <label><input type='radio' onChange={radioFiltering} value={'여'} checked={sex === '여'}/>여</label>
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>키</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  <label><input type='radio' onChange={radioFiltering} value={'남'} checked={sex === '남'}/>120cm 미만</label>
                  <label><input type='radio' onChange={radioFiltering} value={'여'} checked={sex === '여'}/>130~139cm</label>
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>몸무게</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  <label><input type='radio' onChange={radioFiltering} value={'남'} checked={sex === '남'}/>남</label>
                  <label><input type='radio' onChange={radioFiltering} value={'여'} checked={sex === '여'}/>여</label>
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>나이</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  <label><input type='radio' onChange={radioFiltering} value={'남'} checked={sex === '남'}/>남</label>
                  <label><input type='radio' onChange={radioFiltering} value={'여'} checked={sex === '여'}/>여</label>
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>운전면허 소지여부</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  <label><input type='radio' onChange={radioFiltering} value={'남'} checked={sex === '남'}/>남</label>
                  <label><input type='radio' onChange={radioFiltering} value={'여'} checked={sex === '여'}/>여</label>
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>흡연 여부</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  <label><input type='radio' onChange={radioFiltering} value={'남'} checked={sex === '남'}/>남</label>
                  <label><input type='radio' onChange={radioFiltering} value={'여'} checked={sex === '여'}/>여</label>
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>머리색</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  <label><input type='radio' onChange={radioFiltering} value={'남'} checked={sex === '남'}/>남</label>
                  <label><input type='radio' onChange={radioFiltering} value={'여'} checked={sex === '여'}/>여</label>
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>머리길이</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  <label><input type='radio' onChange={radioFiltering} value={'남'} checked={sex === '남'}/>남</label>
                  <label><input type='radio' onChange={radioFiltering} value={'여'} checked={sex === '여'}/>여</label>
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>인종</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  <label><input type='radio' onChange={radioFiltering} value={'남'} checked={sex === '남'}/>남</label>
                  <label><input type='radio' onChange={radioFiltering} value={'여'} checked={sex === '여'}/>여</label>
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>목소리톤</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  <label><input type='radio' onChange={radioFiltering} value={'남'} checked={sex === '남'}/>남</label>
                  <label><input type='radio' onChange={radioFiltering} value={'여'} checked={sex === '여'}/>여</label>
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>거주 지역</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  <label><input type='radio' onChange={radioFiltering} value={'남'} checked={sex === '남'}/>남</label>
                  <label><input type='radio' onChange={radioFiltering} value={'여'} checked={sex === '여'}/>여</label>
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>가능 지역</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  <label><input type='radio' onChange={radioFiltering} value={'남'} checked={sex === '남'}/>남</label>
                  <label><input type='radio' onChange={radioFiltering} value={'여'} checked={sex === '여'}/>여</label>
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>사용가능 악기</div>
                  <div style={{ color: '#989898' }}>다중선택 가능</div>
                  <label><input type='checkbox' onChange={filtering} value={'피아노'} />피아노</label>
                  <label><input type='checkbox' onChange={filtering} value={'바이올린'} />바이올린</label>
                  <label><input type='checkbox' onChange={filtering} value={'드럼'} />드럼</label>
                  <label><input type='checkbox' onChange={filtering} value={'첼로'} />첼로</label>
                  <label><input type='checkbox' onChange={filtering} value={'섹소폰'} />섹소폰</label>
                  <label><input type='checkbox' onChange={filtering} value={'플루트'} />플루트</label>
                  <label><input type='checkbox' onChange={filtering} value={'트럼펫'} />트럼펫</label>
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>언어능력</div>
                  <div style={{ color: '#989898' }}>다중선택 가능</div>
                  <label><input type='checkbox' onChange={filtering} value={'영어'} />영어</label>
                  <label><input type='checkbox' onChange={filtering} value={'일본어'} />일본어</label>
                  <label><input type='checkbox' onChange={filtering} value={'중국어'} />중국어</label>
                  <label><input type='checkbox' onChange={filtering} value={'태국어'} />태국어</label>
                  <label><input type='checkbox' onChange={filtering} value={'프랑스어'} />프랑스어</label>
                  <label><input type='checkbox' onChange={filtering} value={'스페인어'} />스페인어</label>
                  <label><input type='checkbox' onChange={filtering} value={'러시아어'} />러시아어</label>
                  <label><input type='checkbox' onChange={filtering} value={'독일어'} />독일어</label>
                  <label><input type='checkbox' onChange={filtering} value={'베트남어'} />베트남어</label>
                  <label><input type='checkbox' onChange={filtering} value={'아랍어'} />아랍어</label>
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>역할</div>
                  <div style={{ color: '#989898' }}>다중선택 가능</div>
                  <label><input type='checkbox' onChange={filtering} value={'모델'} />모델</label>
                  <label><input type='checkbox' onChange={filtering} value={'댄서'} />댄서</label>
                  <label><input type='checkbox' onChange={filtering} value={'뮤지션'} />뮤지션</label>
                  <label><input type='checkbox' onChange={filtering} value={'성우'} />성우</label>
                  <label><input type='checkbox' onChange={filtering} value={'쇼호스트'} />쇼호스트</label>
                  <label><input type='checkbox' onChange={filtering} value={'액션배우'} />액션배우</label>
                  <label><input type='checkbox' onChange={filtering} value={'배우'} />배우</label>
                  <label><input type='checkbox' onChange={filtering} value={'아나운서'} />아나운서</label>
                  <label><input type='checkbox' onChange={filtering} value={'코미디언'} />코미디언</label>
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>운동</div>
                  <div style={{ color: '#989898' }}>다중선택 가능</div>
                  <label><input type='checkbox' onChange={filtering} value={'수영'} />수영</label>
                  <label><input type='checkbox' onChange={filtering} value={'달리기'} />달리기</label>
                  <label><input type='checkbox' onChange={filtering} value={'리듬체조'} />리듬체조</label>
                  <label><input type='checkbox' onChange={filtering} value={'축구'} />축구</label>
                  <label><input type='checkbox' onChange={filtering} value={'요가'} />요가</label>
                  <label><input type='checkbox' onChange={filtering} value={'폴댄스'} />폴댄스</label>
                  <label><input type='checkbox' onChange={filtering} value={'역도'} />역도</label>
                  <label><input type='checkbox' onChange={filtering} value={'야구'} />야구</label>
                  <label><input type='checkbox' onChange={filtering} value={'농구'} />농구</label>
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>눈모양</div>
                  <div style={{ color: '#989898' }}>다중선택 가능</div>
                  <label><input type='checkbox' onChange={filtering} value={'동그란'} />동그란</label>
                  <label><input type='checkbox' onChange={filtering} value={'찢어진'} />찢어진</label>
                  <label><input type='checkbox' onChange={filtering} value={'눈이 쳐진'} />눈이 쳐진</label>
                  <label><input type='checkbox' onChange={filtering} value={'유쌍'} />유쌍</label>
                  <label><input type='checkbox' onChange={filtering} value={'무쌍'} />무쌍</label>
                </div>
              </div>
            </div>
          </ModalBox>
        </ModalBackdrop>
      </ModalWrap>
    </>
  )
}

export default Modal

const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display : flex;
  justify-content : center;
  align-items : center;
  background-color: #7a7a7a;
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
`;

const ModalWrap = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  height : 100%;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 1000px;
  background-color: #ffffff;
  overflow: scroll;
  height: 600px;

  .title-text{
    font-size: 18px;
    font-weight: 900;
  }

  .filter-title{
    font-size: 25px;
    font-weight: 900;
  }
`;