import styled from 'styled-components';

export const Item = styled.li`
  border-radius: 6px;
  max-width: 474px;
  min-height: 426px;
  overflow: hidden;
  gap: 10px;
  background-color: whitesmoke;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Image = styled.img`
  width: 100%;
  height: 268px;
`;

export const Paragraf = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin: 0;
`;

export const Descr = styled.p`
  margin: 0;
  padding: 0 10px;
`;
export const Btn = styled.button`
  display: flex;
  justify-content: center;
  list-style: none;
  text-decoration: none;
  align-items: center;
  width: 200px;
  min-height: 20px;
  padding: 5px;
  margin: 10px auto;

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
