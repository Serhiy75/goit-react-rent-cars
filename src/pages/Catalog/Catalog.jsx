import { Button } from 'components/Button/Button';
import { CarsList } from 'components/CarsList/CarsList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CARS_LIMIT, fetchCars, fetchFirstCars } from 'redux/operations';
import { selectAmountCars, selectCars } from 'redux/selectors';
import { CatalogPage } from './Catalog.styled';

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const amount = useSelector(selectAmountCars);

  const cars = useSelector(selectCars);

  useEffect(() => {
    if (page > 1) return;
    dispatch(fetchFirstCars(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchCars(page));
    }
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
