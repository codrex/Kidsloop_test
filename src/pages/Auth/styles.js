import styled from '@emotion/styled';
import { Link } from '@reach/router';
import TextInput from '../../components/TextInput';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledTextInput = styled(TextInput)`
  margin-bottom: 10px;
`;

export const StyledSubmitButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const StyledBottomContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => `${theme.color.textColorPrimary}`};
  text-decoration: none;
  font-size: 14px;
`;
