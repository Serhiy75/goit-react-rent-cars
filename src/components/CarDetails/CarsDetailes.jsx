import { useDispatch, useSelector } from 'react-redux';
import { Detailes } from './CarsDetailes.styled';
import { selectCars, selectFavoritesCars } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchCars } from 'redux/operations';

export const CarsDetailes = (handleClick, { cars }) => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const favoriteCar = useSelector(selectFavoritesCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const toFavorite = e => {
    e.preventDefault();
    const carFavorit = cars.find(car => car.id === +e.currentTarget.id);

    const favorit = favoriteCar.find(car => car.id === +e.currentTarget.id);

    if (favorit) {
      const filtered = favoriteCar?.filter(
        car => car.id !== +e.currentTarget.id
      );
      dispatch(deleteCarFavorite(filtered));
    } else {
      dispatch(addCarFavorite(carItems));
    }
  };

  return (
    <>
      {cars.map(car => {
        const address = car.address.split(',');
        return (
          <Detailes key={car.id}>
            <div>
              <img src={car.img} alt={car.make} />
            </div>
            <wrapper>
              <p>{car.make}</p>
              <p>{car.model}</p>
              <p>{car.year}</p>
              <p>{car.rentalPrice}</p>
            </wrapper>
            <container>
              <p>
                {address[1]} | {address[2]} | {car.rentalCompany} | {car.type}|{' '}
                {car.accessories[0]} | {car.functionalities[0]}
              </p>
            </container>
            <button id={car.id} type="button" onClick={handleClick}>
              Learn more
            </button>
            <StyledHeart id={car.id} onClick={toFavorite}>
              {!favoriteCar.some(i => i.id === car.id) ? (
                <StyledHeartIcon />
              ) : (
                <StyledHeartFillIcon />
              )}
            </StyledHeart>
          </Detailes>
        );
      })}
    </>
  );
};
