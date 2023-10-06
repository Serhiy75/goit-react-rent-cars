import { Image, Item } from './CarsListItem.styled';

export const CarsListItem = ({ img, model, make }) => {
  return (
    <Item>
      <Image src={img} alt={model} />
      <p>
        {make} {model}
      </p>
    </Item>
  );
};
