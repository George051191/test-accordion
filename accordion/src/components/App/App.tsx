/* eslint-disable ternary/no-unreachable */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import themes from '../../theme';
import Header from '../Header';
import Sidebar from '../Sidebar';
import TaskTable from '../Table/Table';

const Main = styled.main`
  max-width: 1920px;
  gap: 36px;
  height: 100%;
  padding-left: 103px;
  padding-right: 36px;
  padding-bottom: 20px;
  margin: 0 auto;
  display: flex;
  background-color: ${({ theme: { bgColor } }) => bgColor};
  @media screen and (max-width: 1670px) {
      padding-left: 10px;
    }

`;

const App = () => {
  const [currentTheme, setTheme] = useState<string>('light');

  useEffect(() => {
    document.body.style.background = currentTheme === 'light' ? 'rgb(255, 255, 255)' : 'rgb(22, 22, 22)';
  }, [currentTheme]);

  const chooseTheme = () => {
    if (currentTheme === 'light') {
      setTheme('dark');
      return;
    }
    if (currentTheme === 'dark') {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={currentTheme === 'light' ? themes.light : themes.dark}>
      <Header onClick={chooseTheme} />
      <Main>
        <Sidebar onClick={chooseTheme} />
        <TaskTable />
      </Main>
    </ThemeProvider>
  );
};

export default App;
