/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Tr } from './tableUtilsComponents';
import { SmallArrowIcon } from '../icons';

const Td = styled.td`
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
    height: 68px;
`;

const SelectButton = styled.button`
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
    
`;
const Span = styled.span`
    width: 79px;
    text-align: initial;
`


const TableRow: FC = () => {
    const [isOpen, open] = useState(false);

    return (
        <Tr>
            <Td width={99}>01.01.0001</Td>
            <Td width={75}>
                Шифр
                <br />
                задачи
            </Td>
            <Td width={77}>
                48/21 -
            </Td>
            <Td width={171}>Прозвонить Копьева</Td>
            <Td width={113}>
                <SelectButton  >
                    <Span>Выполнен</Span>
                    <SmallArrowIcon isOpen={isOpen} onClick={() => open(!isOpen)} />
                </SelectButton>
            </Td>
            <Td width={123}>Иванов В.А.</Td>
            <Td width={134}>Свердлова А. И.</Td>
            <Td width={101}>2</Td>
            <Td width={121}>Комментарий</Td>
            <Td width={82}>00:15:00</Td>
            <Td width={82}>00:00:14</Td>
            <Td width={105}>01/01/0001 00:00:00</Td>
            <Td width={105}>01/24/2023 10:23:17</Td>
        </Tr>
    );
};

export default TableRow;