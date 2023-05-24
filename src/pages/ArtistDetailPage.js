import React, { useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { PageContainer, PageWrap } from '../components/styledPage';

const ArtistDetailPage = () => {

  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

  const location = useLocation();
  const [userId, setUserId] = useState(location.state);

  const searchArtist= async (userId) => {
      try {
        const data = await axios({
          method: 'get',
          url: `${PROXY}/channel/${userId}`,
        })
        console.log(data);
      } 
      catch(err) {
        alert(err);
      }
  }

  return (
    <PageWrap>
      <PageContainer>

      </PageContainer>
    </PageWrap>
  )
}

export default ArtistDetailPage