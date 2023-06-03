/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { FC } from 'react';
import styled from 'styled-components';
import { CopyIcon, BellIcon } from './icons';
import {
  MockAvatar, UserName, UserWrapper, Position,
} from './Header';

const Aside = styled.aside`
    width: 80px;
    min-height: 100vh;
    border-right: 1px solid ${({ theme: { sectionBorderColor } }) => sectionBorderColor};
    padding-top: 53px;
    padding-right: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 12px;
    box-sizing: border-box;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

const ContentOpenButton = styled.button`
    border: none;
    background-color: ${({ theme: { copyButtonFill } }) => copyButtonFill};
    width: 56px;
    height: 52px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0;
`;
const Wrapper = styled.div`
  
  flex-direction: column;
  display: none;
  @media screen and (max-width: 900px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Sidebar: FC = () => (
  <Aside>

    <Wrapper>
      <BellIcon />
      <MockAvatar style={{ marginRight: '32px' }} />
    </Wrapper>

    <ContentOpenButton>

      <CopyIcon />
    </ContentOpenButton>
  </Aside>
);
export default Sidebar;
