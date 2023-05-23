import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <ArtistComponent onClick={()=>{navigate('/portfolio/1')}}>
      <img className='img-style' src='https://static.talented.co.kr/user_data/gyelus/profile_image/410ab5c6-43da-4101-b08a-ac992e8af7c6.jpeg?w=300&h=300' />
      <div className='name-text'>포트폴리오 명</div>
      <div className='description-text'>
      <img className='profile-img' src='https://static.talented.co.kr/user_data/gyelus/profile_image/410ab5c6-43da-4101-b08a-ac992e8af7c6.jpeg?w=300&h=300' />
        <div>아티스트명</div>
      </div>
    </ArtistComponent>
  )
}

export default Portfolio

const ArtistComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  cursor: pointer;

  .img-style{
    width: 220px;
    height: 220px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .description-text{
    font-size: 18px;
    line-height: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .profile-img{
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  .name-text{
    font-size: 20px;
    font-weight: 800;
    line-height: 30px;
  }
`;