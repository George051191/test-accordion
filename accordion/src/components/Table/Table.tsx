/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import TaskType from './TaskType';
import { Tr } from './tableUtilsComponents';
import { titles } from '../../assets/utils';

const Section = styled.section`
    display: flex;
    flex-direction: column;
   
    padding-top: 41px;
    max-width: 1390px;
    width: 100%;
    @media screen and (max-width: 1450px) {
      max-width: 1190px;
    overflow: hidden;
    overflow-x: scroll;
    height: fit-content;
    }
`;

const TableHeader = styled.caption`
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    letter-spacing: 0.005em;
    margin: 0;
    text-align: start;
    margin-left: 52px;
    
    margin-bottom: 20px;
    color:${({ theme: { mainFontColor } }) => mainFontColor} ;
`;

const Table = styled.table`
    max-width: 1390px;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width:1550px) {
        width:1290px;
        overflow: auto;
    }
`;

const Th = styled.th<{ width: number }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme: { tableHeaderColor } }) => tableHeaderColor};
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.005em;
    color: ${({ theme: { mainFontColor } }) => mainFontColor} ;
    opacity: 0.8;
    height: 66px;
    max-width: ${({ width }) => width}px;
    min-width: fit-content;
    width: 100%;
`;

const TaskTable: FC = () => {
  const [state, setstate] = useState();
  const [current, setCurrent] = useState('Задачи на сегодня');

  return (
    <Section>
      <Table>
        <TableHeader>Задачи</TableHeader>
        <Tr>
          <Th width={99}>Дата</Th>
          <Th width={75}>
            Шифр
            <br />
            задачи
          </Th>
          <Th width={77}>
            Шифр
            <br />
            проекта
          </Th>
          <Th width={171}>Задача</Th>
          <Th width={113}>Статус</Th>
          <Th width={123}>Ответственный</Th>
          <Th width={134}>Переназначить</Th>
          <Th width={101}>Приоритет</Th>
          <Th width={121}>Комментарий</Th>
          <Th width={82}>
            План
            <br />
            {' '}
            время
          </Th>
          <Th width={82}>
            Факт
            <br />
            {' '}
            время
          </Th>
          <Th width={105}>Начал</Th>
          <Th width={105}>Завершил</Th>
        </Tr>
        {titles.map((el, index) => (
          <TaskType
            key={index}
            title={el}
            open={() => (el === current ? setCurrent('') : setCurrent(el))}
            openState={current === el}
            current={current} />
        ))}

      </Table>
    </Section>
  );
};

export default TaskTable;
