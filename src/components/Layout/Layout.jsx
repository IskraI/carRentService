import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

import Header from '../Header/Header';

const Layout = () => {
  return (
    <div className={css.container}>
      <Header />
      <main>
        <Suspense fallback={<h2>Loading</h2>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;
