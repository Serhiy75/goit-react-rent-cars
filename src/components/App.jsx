import { CarsDetailes } from 'pages/CarsDetailes';
import { Catalog } from 'pages/Catalog/Catalog';
import { Favorites } from 'pages/Favorites/Favorites';
import { Header } from 'pages/Header/Header';
import { Home } from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cars/:carsId" element={<CarsDetailes />} />
      </Route>
    </Routes>
  );
};
