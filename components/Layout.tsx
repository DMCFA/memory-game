import React, { ReactElement } from 'react';
import Meta from './Meta';
import Nav from './Nav';
import Header from './Header';

const Layout: React.FC = ({ children }): ReactElement => {
  return (
    <>
      <Meta />
      <Nav />
      <div>
        <main>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
