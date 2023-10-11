import styled from 'styled-components';

export const ScrollButton = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 0;
  & svg {
    transform: rotate(220deg);
    color: #3470ff;
    width: 40px;
    height: 40px;
  }
`;
