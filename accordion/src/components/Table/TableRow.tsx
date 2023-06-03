/* eslint-disable ternary/no-unreachable */
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Tr } from './tableUtilsComponents';
import { SmallArrowIcon } from '../icons';
import { status } from '../../assets/utils';
import { TTableRow } from '../../types/types';

const Td = styled.td<{ color: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme: { bgColor } }) => bgColor};
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.008em;
    color: ${({ theme: { mainFontColor } }) => mainFontColor} ;
    opacity: 0.8;
    height: 66px;
    background-color: ${({ color }) => (color === '#CEFDED' ? 'rgba(113, 250, 202, 1)' : 'rgba(255, 255, 255, 1)')};
`;

const SelectButton = styled.button<{ color: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid ${({ theme: { selectButtonBorder } }) => selectButtonBorder};
    color: ${({ theme: { selectButtonFontColor } }) => selectButtonFontColor};
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.008em;
    padding: 8px 4px;
    max-width: 111px;
    width: 100%;
    justify-content: flex-start;
    position: relative;
    background-color: ${({ color }) => color};
    
`;
const Span = styled.span`
    width: 79px;
    text-align: initial;
`;
const List = styled.ul<{ isOpen: boolean }>`
    display:  ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 5px;
    border-radius: 8px;
    height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
    overflow: hidden;
    border: 1px solid ${({ theme: { selectButtonBorder } }) => selectButtonBorder};
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    width: 100%;
    bottom: -70px;
    left: 0;
    align-items: flex-start;
    padding-left: 4px;
    box-sizing: border-box;
    transition: all ease .4s;
    background-color: rgba(255, 255, 255, 1);
`;

const ListItem = styled.li`
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    cursor: pointer;
    letter-spacing: 0.008em;
    color:${({ theme: { mainFontColor } }) => mainFontColor} ;

`;

const TableRow: FC<TTableRow> = ({
  date,
  code,
  project,
  task,
  response,
  goto,
  prioritet,
  comment,
  time,
  fact,
  start,
  end,
}) => {
  const [isOpen, open] = useState(false);
  const [choose, setChoose] = useState('Выполнена');

  const setPropertyColor = (stats: string) => {
    switch (stats) {
      case 'На паузе': {
        return 'rgba(255, 204, 221, 1)';
      }
      case 'В работе': {
        return '#CEFDED';
      }
      case 'Выполнена': {
        return 'rgba(255, 255, 255, 1)';
      }
    }
  };
  return (
    <Tr isOpen={isOpen}>
      <Td color={setPropertyColor(choose)!} width={99}>{date}</Td>
      <Td color={setPropertyColor(choose)!} width={75}>
        {code}
      </Td>
      <Td color={setPropertyColor(choose)!} width={77}>
        {project}
      </Td>
      <Td color={setPropertyColor(choose)!} width={171}>{task}</Td>
      <Td color={setPropertyColor(choose)!} width={113}>

        <SelectButton color={setPropertyColor(choose)!}>
          <Span>{choose}</Span>
          <SmallArrowIcon isOpen={isOpen} onClick={() => open(!isOpen)} />
          <List isOpen={isOpen}>
            {status.map((el, index) => (
              <ListItem onClick={() => setChoose(el)} key={index}>{el}</ListItem>
            ))}
          </List>
        </SelectButton>

      </Td>
      <Td color={setPropertyColor(choose)!} width={123}>{response}</Td>
      <Td color={setPropertyColor(choose)!} width={134}>{goto}</Td>
      <Td color={setPropertyColor(choose)!} width={101}>{prioritet}</Td>
      <Td color={setPropertyColor(choose)!} width={121}>{comment}</Td>
      <Td color={setPropertyColor(choose)!} width={82}>{time}</Td>
      <Td color={setPropertyColor(choose)!} width={82}>{fact}</Td>
      <Td color={setPropertyColor(choose)!} width={105}>{start}</Td>
      <Td color={setPropertyColor(choose)!} width={105}>{end}</Td>
    </Tr>
  );
};

export default TableRow;
