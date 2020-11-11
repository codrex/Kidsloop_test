import styled from '@emotion/styled';

export const FormLayoutStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: fit-content;
  width: 100vw;
  flex-direction: column;
  padding: 20px 0;
`;

export const ContainerStyled = styled.div`
  max-width: 400px;
  width: 95%;
  display: flex;
  flex-direction: column;
`;

export const FormCardStyled = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => `${theme.borderRadius}`};
  box-shadow: ${({ theme }) => `${theme.boxShadow}`};
  min-height: 400px;
  padding: 2.5rem 1.5rem;
`;

export const LogoStyled = styled.img`
  width: 60px;
  margin-bottom: 10px;
`;

export const TitleStyled = styled.h1`
  font-size: 25px;
  font-weight: 400;
  margin: 25px 0;
  color: ${({ theme }) => theme.color.textColor};
`;

export const StyledFooter = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.7rem;
  flex-wrap: wrap;
  margin-top: 10px;

  @media screen and (max-width: 320px) {
    flex-direction: column;
    align-items: space-between;
    height: 150px;
  }
`;

export const StyledFooterSpans = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;

  & a {
    font-size: 12px;
    margin-right: 18px;
    color: ${({ theme }) => `${theme.color.textColor}`};
    text-decoration: none;
  }

  & a:last-child {
    margin-right: 5px;
  }
`;

export const StyledSelect = styled.select`
  border: none;
  font-size: 12px;
  border-bottom: 1px solid;
  appearance: none;
  padding-right: 10px;
  outline: none;
  color: ${({ theme }) => theme.color.textColor};
  background-color: ${({ theme }) => theme.color.bgColor};
`;

export const StyledLeftFooter = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  & #brightness-icon {
    cursor: pointer;
    color: ${({ theme }) => theme.color.textColorPrimary};
  }
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 10px;
  padding: 5px 0;
  & svg {
    width: 6px !important;
    padding-left: 4px;
    position: absolute;
    right: 0;
    pointer-events: none;
    background-color: ${({ theme }) => theme.color.bgColor};
    color: ${({ theme }) => theme.color.textColor};
    box-sizing: content-box;
  }
`;
