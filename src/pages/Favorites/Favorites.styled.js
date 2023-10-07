import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DeleteBtn = styled.button`
  margin: 0 auto;
  width: 120px;
  padding: 12px;
`;

export const LinkCatalog = styled(Link)`
  display: flex;
  width: 200px;
  padding: 10px;
  margin-top: 24px;
  margin: auto;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  transition: all 0.3s ease-in-out;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  &:hover {
    background-color: #0b44cd;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  }
  &:active {
    scale: 0.95;
  }
`;

export const Travolta = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
`;
