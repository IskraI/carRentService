import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainSection } from './Layout.styled';
import Header from '../Header/Header';
import { Loader } from '../Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header />
      <MainSection>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainSection>
    </>
  );
};
export default Layout;
