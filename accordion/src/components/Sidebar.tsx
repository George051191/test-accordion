/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { FC } from 'react';
import styled from 'styled-components';
import { CopyIcon } from './icons';

const Aside = styled.aside`
    width: 80px;
    height: 100vh;
    border-right: 1px solid ${({ theme: { sectionBorderColor } }) => sectionBorderColor};
    padding-top: 53px;
   
    display: flex;
    justify-content: center;
`;

const ContentOpenButton = styled.button`
    border: none;
    background-color: ${({ theme: { copyButtonFill } }) => copyButtonFill};
    width: 56px;
    height: 52px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0;
`;

const Sidebar: FC = () => (
  <Aside>
    <ContentOpenButton>
      <CopyIcon />
    </ContentOpenButton>
  </Aside>
);
export default Sidebar;
