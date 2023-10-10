import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

const makeCars = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];

export const SearchForm = () => {
  const [make, setMake] = useState('');

  const handleChange = event => {
    setMake(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (!make) {
      return alert('Slect any make');
    }
    console.log(make);
    setMake('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        aria-label="select"
        name="region"
        required
        onChange={handleChange}
        defaultValue="default"
      >
        <option disabled value="default">
          Enter the text
        </option>
        {makeCars.map(make => (
          <option key={make} value={make}>
            {make}
          </option>
        ))}
      </Select>
    </SearchFormStyled>
  );
};
