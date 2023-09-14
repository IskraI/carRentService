// import './App.css';

import { Route, Routes } from 'react-router-dom';

import { lazy } from 'react';

import Layout from '../components/Layout/Layout';

const Home = lazy(() => import('../pages/HomePage'));
const Catalog = lazy(() => import('../pages/CatalogPage'));
const Favorites = lazy(() => import('../pages/FavoritesPage'));
const ErrorPage = lazy(() => import('../pages/NotFoundPage'));

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
