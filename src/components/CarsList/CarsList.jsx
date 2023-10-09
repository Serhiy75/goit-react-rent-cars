import { CarsListItem } from 'components/CarsListItem/CarsListItem';

import { List } from './CarsList.styled';

export const CarsList = ({ cars }) => {
  return (
    <List>
      {cars.map(
        ({
          id,
          img,
          make,
          model,
          year,
          rentalPrice,
          functionalities,
          accessories,
          rentalCompany,
          type,
          address,
        }) => (
          <CarsListItem
            key={id}
            id={id}
            img={img}
            make={make}
            model={model}
            year={year}
            rentalPrice={rentalPrice}
            address={address}
            functionalities={functionalities}
            accessories={accessories}
            rentalCompany={rentalCompany}
            type={type}
          />
        )
      )}
    </List>
  );
};
