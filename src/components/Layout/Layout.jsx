import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainSection } from './Layout.styled';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <MainSection>
        <Suspense>
          <Outlet />
        </Suspense>
      </MainSection>
    </>
  );
};
export default Layout;
