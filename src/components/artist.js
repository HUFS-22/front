import React from 'react'
import styled from 'styled-components'

const Artist = () => {
  return (
    <ArtistComponent>
      <img className='img-style' src='https://static.talented.co.kr/user_data/gyelus/profile_image/410ab5c6-43da-4101-b08a-ac992e8af7c6.jpeg?w=300&h=300' />
      <div className='description-text'>프리랜서</div>
      <div className='description-text'>사진작가</div>
      <div className='name-text'>만식</div>
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

  .img-style{
    width: 220px;
    height: 220px;
    border-radius: 50%;
    margin-bottom: 20px;
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