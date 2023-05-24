import React from 'react'
import styled from 'styled-components'

const PortfolioDetail = ({title, hashTags, coverImageUrl}) => {
  return (
    <div style={{ display:'flex', flexDirection:'column', marginTop:30, width:'80%'}}>
      <div style={{fontSize:30, fontWeight: 800, marginBottom:20}}>
        {title}
      </div>
      <img src={coverImageUrl} />
      <div style={{display:'flex', flexDirection:'row', marginTop:20}}>
        {
          hashTags && hashTags.map((tag) => (
            <HashTags>{tag}</HashTags>
          ))
        }
      </div>
    </div>
  )
}

export default PortfolioDetail

const HashTags = styled.div`
  border-radius: 20px;
  border: 1px solid black;
  padding: 5px;
  margin-right: 5px;
  font-size: 20px;
`;