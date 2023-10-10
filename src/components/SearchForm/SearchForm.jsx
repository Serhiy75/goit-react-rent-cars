import { makes, pricePoints } from 'components/utils/serchFormPoints';
import Select from 'react-select';
import {
  BtnSearch,
  EnterText,
  Form,
  LabelMilage1,
  LabelMilage2,
  SubForm,
  Title,
} from './SearchForm.styled';

export const SearchForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const { make, mileageFrom, mileageTo, rentalPrice } = e.target.elements;
    const filters = {
      make: make.value,
      rentalPrice: rentalPrice.value,
      mileageFrom: mileageFrom.value,
      mileageTo: mileageTo.value,
    };
    console.log(filters);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <SubForm>
        <label>
          <Title> Car brand </Title>
          <Select name="make" placeholder="Enter the text" options={makes} />
        </label>
        <label>
          <Title>Price / 1 hour </Title>
          <Select
            name="rentalPrice"
            placeholder="To $"
            options={pricePoints.map(price => ({
              value: price,
              label: `$${price}`,
            }))}
          />
        </label>
      </SubForm>
      <div>
        <Title> Car mileage / km</Title>
        <EnterText>
          <label>
            <LabelMilage1 type="number" name="mileageFrom" placeholder="From" />
          </label>
          <label>
            <LabelMilage2 type="number" name="mileageTo" placeholder="To" />
          </label>
        </EnterText>
      </div>
      <BtnSearch type="submit">Search</BtnSearch>
    </Form>
  );
};
