import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(175 238 255);
  padding: 20px;
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
  gap: 10px;
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
  color: #3470ff;
  background-color: transparent;

  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  &.active {
    background-color: #3470ff;
    color: yellow;
  }
  &:hover {
    scale: 1.1;
    color: red;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  }
`;
