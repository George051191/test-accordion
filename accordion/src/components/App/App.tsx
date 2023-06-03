import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import themes from '../../theme';
import Header from '../Header';
import Sidebar from '../Sidebar';
import TaskTable from '../Table/Table';

const Main = styled.main`
  max-width: 1920px;

  height: 100%;
  padding-left: 103px;
  padding-right: 36px;
  padding-bottom: 20px;
  margin: 0 auto;
  display: flex;
  @media screen and (max-width: 1670px) {
      padding-left: 10px;
    }

`;

const App = () => (
  <ThemeProvider theme={themes.light}>
    <Header />
    <Main>
      <Sidebar />
      <TaskTable />
    </Main>
  </ThemeProvider>

);

export default App;
