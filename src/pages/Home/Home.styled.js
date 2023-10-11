import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: whitesmoke;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  box-shadow: rgb(0 0 0) 0px 4px 6px 0px, rgba(0, 0, 0, 0.14) 0px 3px 7px 0px,
    rgba(0, 0, 0, 0.12) 0px 2px 5px -1px;
`;
export const LinkBoks = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
`;

export const Img = styled.img`
  display: block;
  width: 1000px;
  height: 600px;
  margin: 0;
`;

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  list-style: none;
  text-decoration: none;
  align-items: center;
  width: 180px;
  min-height: 20px;
  padding: 10px;
  gap: 30px;
  color: yellow;
  background-color: #3470ff;
  border: 1px solid #3470ff;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  &.active {
    background-color: #afffff;
    color: #000000;
  }
  &:hover {
    scale: 1.1;
    color: red;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  }
`;
