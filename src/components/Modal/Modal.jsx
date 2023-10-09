import { Overlay } from 'components/Overlay/Overlay.styled';
import { useEffect } from 'react';
import { ModalStyled } from './Modal.styled';

export const Modal = ({ handleClick, CarsDetailes }) => {
  useEffect(() => {
    const handlePressKey = event => {
      if (event.code === 'Escape') {
        handleClick();
      }
    };
    window.addEventListener('keydown', handlePressKey);
    return () => window.removeEventListener('keydown', handlePressKey);
  }, [handleClick]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      handleClick();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalStyled>{CarsDetailes}</ModalStyled>
      <button className="button" type="button" onClick={handleClick}>
        X
      </button>
    </Overlay>
  );
};
