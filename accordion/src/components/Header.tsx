/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { FC } from 'react';
import styled from 'styled-components';
import { BellIcon, Switcher } from './icons';

const HeaderWrapper = styled.header`
    max-width: 1920px;
    font-family: 'Mulish';
    margin: 0 auto;
    height: 80px;
    background-color: ${({ theme: { bgColor } }) => bgColor};
    box-sizing: border-box;
    padding-left: 103px;
    margin-bottom: 1px;
    @media screen and (max-width: 1670px) {
      padding-left: 10px;
    }
    @media screen and (min-width: 1965px) {
      padding-left: 45px ;
    }
`;

export const HeaderContentContainer = styled.div`
    max-width: 1540px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid ${({ theme: { sectionBorderColor } }) => sectionBorderColor};
   
  
    
`;

export const MockLogo = styled.div`
    cursor: pointer;
    border-radius: 8px;
    width: 40px;
    height: 40px;
    background-color: ${({ theme: { copyButtonFill } }) => copyButtonFill};
`;
export const Title = styled.h1`
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    letter-spacing: 0.005em;
    color:${({ theme: { mainFontColor } }) => mainFontColor} ;
    margin: 0;
    margin-left: 8px;
    flex: auto;
`;

export const MockAvatar = styled.div`
    width: 42px;
    height: 42px;
    border-radius: 20px;
    background-color: rgba(196, 196, 196, 1);
    margin-left: 33px;
    margin-right: 17px;
`;

export const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-right: 66px;
`;

export const UserName = styled.p`
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    margin: 0;
    letter-spacing: 0.005em;
    color:${({ theme: { mainFontColor } }) => mainFontColor} ;
`;

export const Position = styled.span`
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 120%;
    letter-spacing: 0.008em;
    color:${({ theme: { notPrimaryTextColor } }) => notPrimaryTextColor};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  @media screen and (max-width:900px) {
    display: none;
  }
`;

const Header: FC<{ onClick: () => void }> = ({ onClick }) => (
  <HeaderWrapper>
    <HeaderContentContainer>
      <MockLogo />
      <Title>Проект</Title>
      <Wrapper>
        <Switcher onClick={onClick} />
        <BellIcon />
        <MockAvatar />
        <UserWrapper>
          <UserName>Иванов В. А.</UserName>
          <Position>Должность</Position>
        </UserWrapper>
      </Wrapper>

    </HeaderContentContainer>
  </HeaderWrapper>
);

export default Header;
