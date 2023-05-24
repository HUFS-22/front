import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Artist = ({belong, job, image, userName, userId}) => {
  const navigate = useNavigate();

  return (
    <ArtistComponent onClick={()=>navigate(`/artist/${userId}`)}>
      <img className='img-style' src={image} />
      <div className='description-text'>{belong}</div>
      <div className='description-text'>{job}</div>
      <div className='name-text'>{userName}</div>
    </ArtistComponent>
  )
}

export default Artist

const ArtistComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;
  margin-right: 5px;

  .img-style{
    width: 220px;
    height: 220px;
    border-radius: 50%;
    margin-bottom: 20px;
    object-fit: cover;
  }

  .description-text{
    font-size: 18px;
    line-height: 24px;
  }

  .name-text{
    font-size: 20px;
    font-weight: 800;
    line-height: 30px;
  }
`;