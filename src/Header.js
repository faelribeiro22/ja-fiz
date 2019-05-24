import React from 'react';
import styled from 'styled-components';

const TitleGroup = styled.div`
  text-align: center;
`;
const Title = styled.h1`
  font-size: 18px;
  margin-bottom: 0;
`;

const SubTitle = styled.p`
  font-size: 12px;
  margin-top: 0;
`;

const Header = ({ onToggleDarkTheme }) => {
  return (
    <div>
      <TitleGroup>
        <Title>Ja-Fiz</Title>
        <SubTitle>The ultimate to-do app</SubTitle>
      </TitleGroup>
      <button onClick={onToggleDarkTheme}>tema</button>
    </div>
  );
};

export default Header;
