import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/Global.styled';
import Meta from './Meta';
import Nav from './Nav';

interface theme {
  colors: object;
}

const theme = {
  colors: {
    header: '#fff',
    body: '#fff',
    footer: '#fff',
  },
};

const Layout: React.FC = ({ children }): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Meta />
        <Nav />
        <div>
          <main>{children}</main>
        </div>
      </>
    </ThemeProvider>
  );
};

export default Layout;
