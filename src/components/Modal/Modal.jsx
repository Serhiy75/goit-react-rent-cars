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
  ImageThumb,
  Item,
  MilegEPrice,
  Milege,
  ModalStyled,
  Paragraf,
  Price,
  PriceCar,
  Rental,
  Span,
  Tel,
  Title,
  User,
} from './Modal.styled';
import { numberWithVirgule } from 'helpers/numberWithVirgule';
import PropTypes from 'prop-types';

export const Modal = ({ handleClick, car }) => {
  useEffect(() => {
    const handlePressKey = event => {
      if (event.code === 'Escape') {
        handleClick();
      }
    };
    document.body.classList.add('no-scroll');
    window.addEventListener('keydown', handlePressKey);

    return () => {
      window.removeEventListener('keydown', handlePressKey);
      document.body.classList.remove('no-scroll');
    };
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
  const rentalConditionsToArray = rentalConditions.split('\n');
  const userconditions = rentalConditionsToArray[0];
  const userConditionsDescr = userconditions.split(': ');
  const driverLicense = rentalConditionsToArray[1];
  const securyty = rentalConditionsToArray[2];

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalStyled>
        <CloseBtn className="button" type="button" onClick={handleClick}>
          <GrClose siz={24} />
        </CloseBtn>
        <Item>
          <ImageThumb>
            <Image src={img} alt={model} />
          </ImageThumb>
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
              <Age>
                {userConditionsDescr[0]}:
                <Milege> {userConditionsDescr[1]} </Milege>
              </Age>
              <Driver>{driverLicense}</Driver>
            </User>
            <MilegEPrice>
              <Price>{securyty}</Price>
              <Price>
                Mileage: <Milege>{numberWithVirgule(mileage)} </Milege>
              </Price>
              <Price>
                Price: <PriceCar>{rentalPrice.slice(1) + '$'}</PriceCar>
              </Price>
            </MilegEPrice>
          </Descr>
          <Tel href="tel:+380730000000"> rental car</Tel>
        </Item>
      </ModalStyled>
    </Overlay>
  );
};

Modal.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      year: PropTypes.number,
      make: PropTypes.string,
      model: PropTypes.string,
      type: PropTypes.string,
      img: PropTypes.string,
      description: PropTypes.string,
      accessories: PropTypes.arrayOf(PropTypes.string),
      functionalities: PropTypes.arrayOf(PropTypes.string),
      rentalPrice: PropTypes.string,
      rentalCompany: PropTypes.string,
      address: PropTypes.string,
      fuelConsumption: PropTypes.string,
      engineSize: PropTypes.string,
      rentalConditions: PropTypes.string,
      mileage: PropTypes.number,
    })
  ),
};
