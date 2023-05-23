import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RadioFilter from '../data/filtering.json'
import axios from 'axios'

const Modal = ({ setFilterModal }) => {
  const [filter, setFilter] = useState([]);
  const [sex, setSex] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [driverLicense, setDriverLicense] = useState('');
  const [smoke, setSmoke] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [hairHeight, setHairHeight] = useState('');
  const [skin, setSkin] = useState('');
  const [voice, setVoice] = useState('');

  const filtering = (e) => {
    if (filter.includes(e.target.value)) {
      setFilter(filter.filter(feature => feature!=e.target.value))
    }
    else {
      setFilter([...filter,e.target.value])
    }
  }

  const filterRegister = async (userId) => {
    try {
      const data = await axios({
        method: 'post',
        url: `/artist-keyword/${userId}`,
        data: {
          "keywords": [
            ...filter,
            height,
            weight,
            hairColor,
            hairHeight,
            sex,
            age,
            skin,
            voice,
            driverLicense,
            smoke
          ].filter((f)=>f!='')
        }
      })
      console.log(data)
      if (data.data.code === 200) {
        setFilterModal(false)
      }
      else {
        alert(data.data.message)
      }
    } 
    catch(err) {
      // alert(err.message);
    }
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
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottom: '1px solid #e6e6e6', paddingTop: 15, paddingBottom: 15, backgroundColor: '#FFFFFF', position: 'fixed', width: 980, borderTopRightRadius:20,borderTopLeftRadius:20}}>
              <div className='title-text' style={{marginLeft:15}}>기타 카테고리</div>
              <button className='title-text' style={{marginRight:15, color:'#FF1B3F', backgroundColor:'transparent', border:0}} disabled={filter.length==0} onClick={()=>filterRegister(1)} >저장</button>
            </div>
            <div style={{padding:30, marginTop:40}}>
              <div className='filter-title'>본인에 해당하는 항목을 선택해주세요</div>
              <div style={{ color: '#989898', fontWeight: 600, fontSize: 17, marginTop: 20, lineHeight: '25px' }}>더 좋은 캐스팅 제안을 드리기 위해 사용되며,<br />나의 정보가 밖으로 노출되지 않아요.</div>
              <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>성별</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  {RadioFilter.RadioFilter[4].subTitle.map((content)=>(
                     <label style={{marginBottom:3}}><input type='radio' onChange={()=>setHeight(content)} value={content} checked={height === content} />{content}</label>
                  ))}
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>키</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  {RadioFilter.RadioFilter[0].subTitle.map((content)=>(
                     <label style={{marginBottom:3}}><input type='radio' onChange={()=>setHeight(content)} value={content} checked={height === content} />{content}</label>
                  ))}
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>몸무게</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  {RadioFilter.RadioFilter[1].subTitle.map((content)=>(
                     <label style={{marginBottom:3}}><input type='radio' onChange={()=>setWeight(content)} value={content} checked={weight === content} />{content}</label>
                  ))}
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>나이</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  {RadioFilter.RadioFilter[5].subTitle.map((content)=>(
                     <label style={{marginBottom:3}}><input type='radio' onChange={()=>setAge(content)} value={content} checked={age === content} />{content}</label>
                  ))}
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>운전면허 소지여부</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  {RadioFilter.RadioFilter[8].subTitle.map((content)=>(
                     <label style={{marginBottom:3}}><input type='radio' onChange={()=>setDriverLicense(content)} value={content} checked={driverLicense === content} />{content}</label>
                  ))}
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>흡연 여부</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  {RadioFilter.RadioFilter[9].subTitle.map((content)=>(
                     <label style={{marginBottom:3}}><input type='radio' onChange={()=>setSmoke(content)} value={content} checked={smoke === content} />{content}</label>
                  ))}
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>머리색</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  {RadioFilter.RadioFilter[2].subTitle.map((content)=>(
                     <label style={{marginBottom:3}}><input type='radio' onChange={()=>setHairColor(content)} value={content} checked={hairColor === content} />{content}</label>
                  ))}
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>머리길이</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  {RadioFilter.RadioFilter[3].subTitle.map((content)=>(
                     <label style={{marginBottom:3}}><input type='radio' onChange={()=>setHairColor(content)} value={content} checked={hairColor === content} />{content}</label>
                  ))}
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>인종</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  {RadioFilter.RadioFilter[6].subTitle.map((content)=>(
                     <label style={{marginBottom:3}}><input type='radio' onChange={()=>setSkin(content)} value={content} checked={skin === content} />{content}</label>
                  ))}
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>목소리톤</div>
                  <div style={{ color: '#989898' }}>다중선택 불가능</div>
                  {RadioFilter.RadioFilter[7].subTitle.map((content)=>(
                     <label style={{marginBottom:3}}><input type='radio' onChange={()=>setVoice(content)} value={content} checked={voice === content} />{content}</label>
                  ))}
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>가능 지역</div>
                  <div style={{ color: '#989898' }}>다중선택 가능</div>
                  {RadioFilter.CheckFilter[5].subTitle.map((content)=>(
                    <label style={{ marginBottom: 3 }}><input type='checkbox' onChange={filtering} value={content} />{content}</label>
                  ))}
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>사용가능 악기</div>
                  <div style={{ color: '#989898' }}>다중선택 가능</div>
                  {RadioFilter.CheckFilter[4].subTitle.map((content)=>(
                    <label style={{ marginBottom: 3 }}><input type='checkbox' onChange={filtering} value={content} />{content}</label>
                  ))}
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>언어능력</div>
                  <div style={{ color: '#989898' }}>다중선택 가능</div>
                  {RadioFilter.CheckFilter[0].subTitle.map((content)=>(
                    <label style={{ marginBottom: 3 }}><input type='checkbox' onChange={filtering} value={content} />{content}</label>
                  ))}
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>역할</div>
                  <div style={{ color: '#989898' }}>다중선택 가능</div>
                  {RadioFilter.CheckFilter[1].subTitle.map((content)=>(
                    <label style={{ marginBottom: 3 }}><input type='checkbox' onChange={filtering} value={content} />{content}</label>
                  ))}
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>운동</div>
                  <div style={{ color: '#989898' }}>다중선택 가능</div>
                  {RadioFilter.CheckFilter[2].subTitle.map((content)=>(
                    <label style={{ marginBottom: 3 }}><input type='checkbox' onChange={filtering} value={content} />{content}</label>
                  ))}
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>눈모양</div>
                  <div style={{ color: '#989898' }}>다중선택 가능</div>
                  {RadioFilter.CheckFilter[3].subTitle.map((content)=>(
                    <label style={{ marginBottom: 3 }}><input type='checkbox' onChange={filtering} value={content} />{content}</label>
                  ))}
                </div>
                <div style={{marginTop:20, display:'flex', flexDirection:'column'}}>
                  <div className='filter-title'>이미지</div>
                  <div style={{ color: '#989898' }}>다중선택 가능</div>
                  {RadioFilter.CheckFilter[6].subTitle.map((content)=>(
                    <label style={{ marginBottom: 3 }}><input type='checkbox' onChange={filtering} value={content} />{content}</label>
                  ))}
                </div>
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
  width: 980px;
  background-color: #ffffff;
  overflow: scroll;
  height: 600px;
  position: 'relative';

  .title-text{
    font-size: 18px;
    font-weight: 900;
  }

  .filter-title{
    font-size: 25px;
    font-weight: 900;
  }
`;