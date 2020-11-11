import React from 'react';

import { TextInputStyled, TextInputWrapperStyled } from './styles';

function TextInput({ onChange, value, error, className, ...props }) {
  return (
    <TextInputWrapperStyled className={className}>
      <TextInputStyled value={value} onChange={onChange} {...props} />
      {error && <span>{error}</span>}
    </TextInputWrapperStyled>
  );
}

export default TextInput;
