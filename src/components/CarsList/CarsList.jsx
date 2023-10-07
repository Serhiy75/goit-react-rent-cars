import { CarsListItem } from 'components/CarsListItem/CarsListItem';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selectors';
import { List } from './CarsList.styled';

export const CarsList = () => {
  const cars = useSelector(selectCars);

  return (
    <List>
      {cars.map(({ id, img, make, model, year, rentalPrice, description }) => (
        <CarsListItem
          key={id}
          img={img}
          make={make}
          model={model}
          year={year}
          rentalPrice={rentalPrice}
          description={description}
        />
      ))}
    </List>
  );
};
