import React from 'react';
import styled from 'styled-components';
import { MdBrightness5, MdBrightness3 } from 'react-icons/md';
import Paper from '@material-ui/core/Paper';

const TitleGroup = styled.div`
  text-align: center;
  margin-top: 25px;
`;
const Title = styled.h1`
  font-size: 18px;
  margin-bottom: 0;
`;

const SubTitle = styled.p`
  font-size: 12px;
  margin-top: 0;
`;

const DarkThemeIcon = styled(MdBrightness3)`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 21px;
`;

const LightThemeIcon = styled(MdBrightness5)`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 21px;
  color: #ff8c00;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  height: 148px;
`;

const Header = ({ onToggleDarkTheme, darkTheme }) => {
  return (
    <HeaderContent>
      <TitleGroup>
        <Title>Ja-Fiz</Title>
        <SubTitle>The ultimate to-do app</SubTitle>
      </TitleGroup>
      {darkTheme ? (
        <DarkThemeIcon onClick={onToggleDarkTheme} />
      ) : (
        <LightThemeIcon onClick={onToggleDarkTheme} />
      )}
    </HeaderContent>
  );
};

export default Header;
