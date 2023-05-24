import React from 'react'
import Header from '../components/header'
import { PageContainer, PageWrap } from '../components/styledPage'
import main_menu from '../assets/images/main_menu.svg'
import main_two from '../assets/images/main_two.png'

const Main = () => {
  return (
    <PageWrap>
      <PageContainer>
        <img src='https://static.talented.co.kr/t_img/banner/main/event/57b04886-9ef8-4b25-8af6-2542bf38472b.jpeg?f=webp' style={{width:1200, marginTop:30, marginBottom:30, }}/>
        <img src={main_menu} />
        <img src={main_two} style={{width:1200}}/>
      </PageContainer>
    </PageWrap>
  )
}

export default Main