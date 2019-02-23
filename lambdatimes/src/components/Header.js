import React from 'react';
import {HeaderDiv,HeaderTitle,HeaderDate,HeaderTemp} from "./Styled-Components/ContainerDiv"

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderDate>SMARCH 32, 2018</HeaderDate>
      <HeaderTitle>Lambda Times</HeaderTitle>
      <HeaderTemp>98°</HeaderTemp>
    </HeaderDiv>
  )
}

export default Header