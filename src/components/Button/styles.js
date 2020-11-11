import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  padding: 7px 30px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  font-size: 14px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.color.primary};
  outline-color: ${({ theme }) => theme.color.primaryLight};
  color: ${({ theme }) => theme.color.white};

  ${({ isLoading, theme }) =>
    isLoading &&
    `
    pointer-events:none;
    background-color: ${theme.color.primaryLight};

  `}
`;
