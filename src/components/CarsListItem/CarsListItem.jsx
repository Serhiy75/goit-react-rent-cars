import { useState } from 'react';
import { Btn, Descr, Image, Item, Paragraf } from './CarsListItem.styled';
import { Modal } from 'components/Modal/Modal';

export const CarsListItem = ({
  img,
  model,
  make,
  year,
  rentalPrice,
  description,
}) => {
  const [toggleModal, setToggleModal] = useState(false);
  const handleClick = () => {
    setToggleModal(prevState => !prevState);
  };
  return (
    <>
      <Item onClick={handleClick}>
        <Image src={img} alt={model} />
        <Paragraf>
          <p>
            {make} {model}, {year}
          </p>
          <p> {rentalPrice}</p>
        </Paragraf>
        <Descr>{description}</Descr>
        <Btn>learn more</Btn>
      </Item>
      {toggleModal && <Modal handleClick={handleClick}></Modal>}
    </>
  );
};
