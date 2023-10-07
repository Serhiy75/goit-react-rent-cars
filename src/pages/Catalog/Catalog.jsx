import { Button } from 'components/Button/Button';
import { CarsList } from 'components/CarsList/CarsList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CARS_LIMIT, fetchCars } from 'redux/operations';
import { selectAmountCars } from 'redux/selectors';
import { CatalogPage } from './Catalog.styled';

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const amount = useSelector(selectAmountCars);

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  return (
    <CatalogPage>
      <CarsList />
      {amount / CARS_LIMIT < 4 && <Button onClick={handleLoadMore} />}
    </CatalogPage>
  );
};

export default Catalog;
