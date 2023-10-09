import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/selectors';
import Loader from './Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const Catalog = lazy(() => import('pages/Catalog/Catalog'));
const Favorites = lazy(() => import('pages/Favorites/Favorites'));

export const App = () => {
  const isLoading = useSelector(selectLoading);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
      {isLoading && <Loader />}
    </>
  );
};
