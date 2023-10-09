import { Overlay } from 'components/Overlay/Overlay.styled';
import { useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import {
  Accessories,
  Age,
  CloseBtn,
  Country,
  Descr,
  Description,
  Driver,
  Functional,
  Image,
  Item,
  MilegEPrice,
  ModalStyled,
  Paragraf,
  Price,
  Rental,
  Span,
  Tel,
  Title,
  User,
} from './Modal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsShowModal } from 'redux/selectors';

export const Modal = ({ handleClick, car }) => {
  const dispatch = useDispatch();
  const isShowModal = useSelector(selectIsShowModal);

  useEffect(() => {
    if (isShowModal) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [dispatch, isShowModal]);

  useEffect(() => {
    const handlePressKey = event => {
      if (event.code === 'Escape') {
        handleClick();
      }
    };
    window.addEventListener('keydown', handlePressKey);

    return () => window.removeEventListener('keydown', handlePressKey);
  }, [handleClick]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      handleClick();
    }
  };
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    functionalities,
    accessories,
    fuelConsumption,
    engineSize,
    description,
    rentalConditions,
    mileage,
    type,
    address,
  } = car;

  const updateaddress = address.split(', ').slice(-2).join(' | ');
  const userconditions = rentalConditions.split('').slice(0, 15);
  const driverLicense = rentalConditions.split('').slice(15, -27);
  const securyty = rentalConditions.split('').slice(38);

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalStyled>
        <CloseBtn className="button" type="button" onClick={handleClick}>
          <GrClose siz={24} />
        </CloseBtn>
        <Item>
          <Image src={img} alt={model} />
          <Paragraf>
            <Title>
              {make}
              <Span> {model}, </Span>
              {year}
            </Title>
          </Paragraf>

          <Descr>
            <Country>
              {updateaddress} | id: {id} | Year: {year} | type: {type}
            </Country>
            <Country>
              fuelConsumption: {fuelConsumption} | engineSize: {engineSize}
            </Country>
            <Description>{description}</Description>
            <Functional>Accessories and functionalities:</Functional>
            <Accessories>
              {accessories[0]} | {accessories[1]} | {accessories[2]}
            </Accessories>
            <Accessories>
              {functionalities[0]} | {functionalities[1]} | {functionalities[2]}
            </Accessories>
            <Rental>Rental Conditions:</Rental>
            <User>
              <Age>{userconditions} </Age>
              <Driver>{driverLicense}</Driver>
            </User>
            <MilegEPrice>
              <Price>{securyty}</Price>
              <Price>Mileage: {mileage} </Price>
              <Price> Price: {rentalPrice}</Price>
            </MilegEPrice>
          </Descr>
          <Tel href="tel:+380730000000"> rental car</Tel>
        </Item>
      </ModalStyled>
    </Overlay>
  );
};
