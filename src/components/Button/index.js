import React from 'react';

import { ButtonStyled } from './styles';

function Button({ onClick, children, isLoading, ...props }) {
  return (
    <ButtonStyled onClick={onClick} isLoading={isLoading} {...props}>
      {!isLoading && children}
      {isLoading && 'Loading...'}
    </ButtonStyled>
  );
}

export default Button;
