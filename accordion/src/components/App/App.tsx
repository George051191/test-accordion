import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import themes from '../../theme';
import Header from '../Header';
import Sidebar from '../Sidebar';
import TaskTable from '../Table/Table';

const Main = styled.main`
  max-width: 1920px;
  width: 100%;
  height: 100%;
  padding-left: 103px;
  margin: 0 auto;
  display: flex;

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
