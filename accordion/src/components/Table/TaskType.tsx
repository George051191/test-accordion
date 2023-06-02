/* eslint-disable no-nested-ternary */
/* eslint-disable ternary/nesting */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Tr } from './tableUtilsComponents';
import { ArrowIcon } from '../icons';
import TableRow from './TableRow';

const Td = styled.td`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: ${({ theme: { toDoListColorButton } }) => toDoListColorButton};
    height: 48px;
`;

const TBody = styled.tbody<{ isOpen?:boolean }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: ${({ isOpen }) => (isOpen ? '100%' : isOpen === undefined ? '100%' : '0')};
    overflow: hidden;
    transition: all ease .5s;
`;

const Title = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin: 0;
    display: flex;
    align-items: center;
    letter-spacing: 0.25px;
    color:${({ theme: { switcherTextColor } }) => switcherTextColor};
    margin-right: 94px;
`;

const TaskType: FC = () => {
  const [isOpen, openList] = useState(false);
  return (

    <TBody>
      <Tr>
        <Td colSpan={13}>
          <Title>Выполненные задачи</Title>
          <ArrowIcon isOpen={isOpen} onClick={() => { openList(!isOpen); }} />
        </Td>
      </Tr>
      <TBody isOpen={isOpen}>
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </TBody>
    </TBody>

  );
};

export default TaskType;
