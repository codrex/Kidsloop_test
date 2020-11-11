import styled from '@emotion/styled';

export const TextInputStyled = styled.input`
  width: 100%;
  height: 45px;
  border-radius: ${({ theme }) => `${theme.borderRadius}`};
  border: ${({ theme }) => `1px solid ${theme.color.blackLight}`};
  font-size: 18px;
  padding: 0 10px;
  outline-color: ${({ theme }) => `${theme.color.primaryLight}`};

  &::placeholder {
    color: ${({ theme }) => theme.color.blackLight};
    font-size: 16px;
  }
`;

export const TextInputWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & span {
    color: red;
    font-size: 10px;
    margin: 5px 0 0 10px;
  }
`;
