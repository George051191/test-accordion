/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components';

export const Tr = styled.tr<{ isOpen?: boolean, color?: string }>`
    width: 100%;
    display: flex;
    margin-bottom: ${({ isOpen }) => (isOpen ? '55px' : '0')};
    transition: all ease .4s;
    
`;
