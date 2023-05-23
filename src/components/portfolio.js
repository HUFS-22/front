import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Portfolio = ({title, image, userName, userImage}) => {
  const navigate = useNavigate();

  return (
    <ArtistComponent onClick={()=>{navigate('/portfolio/1')}}>
      <img className='img-style' src={image} />
      <div className='name-text'>{title}</div>
      <div className='description-text'>
      <img className='profile-img' src={userImage} />
        <div>{userName}</div>
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
  margin-right: 10px;

  .img-style{
    width: 220px;
    height: 220px;
    border-radius: 10px;
    margin-bottom: 20px;
    object-fit: cover;
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