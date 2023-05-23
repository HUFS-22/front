import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

const Accordian = ({title, contents, setContent, filter, IsMultiSelect, filtering}) => {
  const parentRef = React.useRef(null);
  const childRef = React.useRef(null);
  const [isCollapse, setIsCollapse] = useState(false);

  const handleButtonClick = useCallback(
    (event) => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
        parentRef.current.style.background = "white";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      }
      setIsCollapse(!isCollapse);
    },
    [isCollapse]
  );

  const parentRefHeight = parentRef.current?.style.height ?? "0px";
  const buttonText = parentRefHeight === "0px" ? "+" : "-";

  return (
    <Container>
      <Header onClick={handleButtonClick}>
        {title}
        <div style={{fontSize:12, color:'silver', marginLeft:5}}>{IsMultiSelect?'(다중선택 가능)':'(다중선택 불가능)'}</div>
        <Button>{buttonText}</Button>
      </Header>
      <ContentsWrapper ref={parentRef}>
        <Contents ref={childRef}>
          {
          IsMultiSelect==false ? contents.map((content) => (
            <label style={{marginBottom:3}}><input type='radio' onChange={()=>setContent(content)} value={content} checked={filter === content} />{content}</label>
          )) :
          contents.map((content) => (
            <label style={{marginBottom:3}}><input type='checkbox' onChange={filtering} value={content} />{content}</label>
          ))
        }
        </Contents>
      </ContentsWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border: 1px solid silver;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  height: 32px;
  margin: 0 32px 0 8px;
`;

const Button = styled.div`
  right: 8px;
  font-size: 18px;
  position: absolute;
  justify-content: center;
`;

const ContentsWrapper = styled.div`
  height: 0;
  margin-left: 8px;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
`;

const Contents = styled.div`
  padding: 0.1px;
  display: flex;
  flex-direction: column;
  font-size: 15px;
`;

export default React.memo(Accordian);
