import { CarsListItem } from 'components/CarsListItem/CarsListItem';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selectors';
import { List } from './CarList.styled';

export const CarsList = () => {
  const cars = useSelector(selectCars);
  return (
    <List>
      {cars.map(({ id, img, make, model }) => (
        <CarsListItem key={id} img={img} make={make} model={model} />
      ))}
    </List>
  );
};
