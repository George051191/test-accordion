/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable ternary/nesting */

import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Tr } from './tableUtilsComponents';
import { ArrowIcon } from '../icons';
import TableRow from './TableRow';
import { rowOblects } from '../../assets/utils';
import { TTaskType } from '../../types/types';

const Td = styled.td`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: ${({ theme: { toDoListColorButton } }) => toDoListColorButton};
    height: 48px;
  
`;

const TBody = styled.tbody<{ isOpen?: boolean }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: ${({ isOpen }) => (isOpen ? '746px' : isOpen === undefined ? '746px' : '0')};
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
    flex: auto;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 235px;
`;

const TaskType: FC<TTaskType> = ({ open, title, openState }) => (

  <>
    <Tr>
      <Td colSpan={13}>
        <Wrapper>
          <Title>{title}</Title>
          <ArrowIcon isOpen={openState} onClick={open} />
        </Wrapper>

      </Td>
    </Tr>
    <TBody isOpen={openState}>
      {rowOblects.map((el, index) => (
        <TableRow
          key={index}
          date={el.date}
          code={el.code}
          project={el.project}
          task={el.task}
          response={el.response}
          goto={el.goto}
          prioritet={el.prioritet}
          comment={el.comment}
          time={el.time}
          fact={el.fact}
          start={el.start}
          end={el.end} />
      ))}

    </TBody>

  </>

);

export default TaskType;
