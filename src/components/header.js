import React, { useState } from 'react'
import styled from "styled-components"
import talented_logo from '../assets/images/talented_logo.png'
import alarm from '../assets/images/alarm.svg'
import message from '../assets/images/message.svg'
import person from '../assets/images/person.svg'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  return (
    <HeaderComponent>
      <div style={{width:'1200px', display:'flex', flexDirection:'row', justifyContent:'space-between', alignContent:'center'}}>
        <img src={talented_logo} className='talented-logo' onClick={() => {
          setMenu(false);
          navigate('/')
        }}/>
        <div style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
          <div className='text' style={{color:menu&&'#000'}} onClick={() => {
            setMenu(true);
            navigate('/search');
          }}>발견</div>
          <div className='text'><Link to='https://talented.co.kr/pc_aucaList' style={{ textDecoration: "none", color: '#b4b4b4'}}>오.캐</Link></div>
          <div className='text'><Link to='https://talented.co.kr/pc_storyList' style={{ textDecoration: "none", color: '#b4b4b4' }}>매거진</Link></div>
          <div className='text'>나의 채널</div>
          <img src='https://static.talented.co.kr/t_img/service_img/img_pc/icon/ic_b-tap_rookiecamp_end_pc_100_20.png' style={{width:'100px', height:'20px', objectFit:'contain'}}/>
        </div>
        <div style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
          <div style={{color:'#666', marginRight:'1.875rem'}}>STORE</div>
          <img src={alarm} className='icon'/>
          <img src={message} className='icon'/>
          <img src={person} className='icon' />
          <PortfolioButton>
            포트폴리오 +
          </PortfolioButton>
        </div>
      </div>
    </HeaderComponent>
  )
}

export default Header

const HeaderComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 0;
  border-bottom: 1px solid #D6D0D0;

  .talented-logo{
    height: 40px;
    object-fit: contain;
    cursor: pointer;
  }
  .icon{
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    margin-right: 2.0625rem;
  }
  .text{
    font-size: 1.125rem;
    color: #b4b4b4;
    font-weight: 700;
    cursor: pointer;
    margin-right: 60px;
  }
`;

const PortfolioButton = styled.div`
  padding: 7px 16px;
  background: #ff0037;
  color: #fff;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
`;