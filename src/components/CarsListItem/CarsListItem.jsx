import { useState } from 'react';
import {
  Btn,
  Descr,
  Image,
  Item,
  Paragraf,
  StyledHeart,
  StyledHeartFillIcon,
  StyledHeartIcon,
} from './CarsListItem.styled';
import { Modal } from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesCars } from 'redux/selectors';
import { addFavoriteCar, deleteFavoritCar } from 'redux/favoriteSlice';

export const CarsListItem = ({
  id,
  img,
  model,
  make,
  year,
  rentalPrice,
  accessories,

  address,
  rentalCompany,
  type,
  functionalities,
}) => {
  const [toggleModal, setToggleModal] = useState(false);
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoritesCars);
  const handleClick = () => {
    setToggleModal(prevState => !prevState);
  };

  const handleToogleFavorites = carId => {
    const car = favoriteCars.find(({ id }) => carId === id);
    console.log(car);
    if (!car) {
      dispatch(
        addFavoriteCar({
          id,
          img,
          model,
          make,
          year,
          rentalPrice,
          accessories,
          address,
          rentalCompany,
          type,
          functionalities,
        })
      );
    } else {
      dispatch(deleteFavoritCar(carId));
    }
  };

  const updateaddress = address.split(', ').slice(-2).join(' | ');
  return (
    <>
      <Item>
        <Image src={img} alt={model} />
        <Paragraf>
          <p>
            {make} {model}, {year}
          </p>
          <p> {rentalPrice}</p>
        </Paragraf>
        <Descr>
          {updateaddress} | {rentalCompany} |{make} |{id} |{type}|{' '}
          {accessories[0]} | {functionalities[0]}
        </Descr>
        <Btn id={id} onClick={handleClick}>
          learn more
        </Btn>
        <StyledHeart id={id} onClick={() => handleToogleFavorites(id)}>
          {!favoriteCars.some(i => i.id === id) ? (
            <StyledHeartIcon />
          ) : (
            <StyledHeartFillIcon />
          )}
        </StyledHeart>
      </Item>
      {toggleModal && <Modal handleClick={handleClick}></Modal>}
    </>
  );
};
