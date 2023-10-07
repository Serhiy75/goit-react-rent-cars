import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: beige;
  padding: 20px;
  /* border-bottom: 1px solid gray; */
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const PageList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  margin-left: 30px;
  gap: 20px;
`;

export const NavigateItem = styled.li`
  display: flex;
  justify-content: center;
`;

export const NavigateLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  list-style: none;
  text-decoration: none;
  align-items: center;
  width: 100px;
  min-height: 20px;
  padding: 10px;
  gap: 30px;
  color: white;
  background-color: blue;
  border: 1px solid blue;
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
