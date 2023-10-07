import styled from 'styled-components';

export const ModalStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: ${({ height }) => height};
  border: 1px solid black;
  background-color: grey;
  border-radius: 10px;
  padding: 10px;
`;
