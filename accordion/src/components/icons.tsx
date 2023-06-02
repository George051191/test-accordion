/* eslint-disable ternary/no-unreachable */
import React, { FC } from 'react';
import styled from 'styled-components';

import { ReactComponent as BellPic } from '../assets/images/bell.svg';
import { ReactComponent as CopyPic } from '../assets/images/copy.svg';
import { ReactComponent as ArrowPic } from '../assets/images/arrow.svg';
import { ReactComponent as SmallArrowPic } from '../assets/images/colouredarrow.svg';

export const BellIcon = styled(BellPic)`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

export const CopyIcon = styled(CopyPic)`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

export const ArrowIcon = styled(ArrowPic) <{ isOpen: boolean }>`
    width: 10px;
    height: 6px;
    cursor: pointer;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
    transition: all ease .4s;
`;

export const SmallArrowIcon = styled(SmallArrowPic) <{ isOpen: boolean }>`
    width: 5px;
    height: 4px;
    cursor: pointer;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
    transition: all ease .4s;
    margin-left: 11px;
`;