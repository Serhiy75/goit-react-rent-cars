import { Button } from 'components/Button/Button';
import { CarsList } from 'components/CarsList/CarsList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CARS_LIMIT, fetchCars } from 'redux/operations';
import { selectAmountCars, selectCars } from 'redux/selectors';
import { CatalogPage } from './Catalog.styled';
import { clearCarsList } from 'redux/carSlice';

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const cars = useSelector(selectCars);
  const amount = useSelector(selectAmountCars);

  useEffect(() => {
    if (page === 1) {
      dispatch(clearCarsList());
    }
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <CatalogPage>
      <CarsList cars={cars} />
      {amount / CARS_LIMIT < 4 && <Button onClick={handleLoadMore} />}
    </CatalogPage>
  );
};

export default Catalog;
