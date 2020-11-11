import React from 'react';
import { Formik } from 'formik';

import FormLayout from '../../components/FormLayout';
import Button from '../../components/Button';
import { changePasswordSchema } from './schema';
import { useLoadingSimulator } from '../../hooks';
import { routes } from '../../contants';
import { getError } from '../../utils';

import {
  StyledForm,
  StyledLink,
  StyledSubmitButtonContainer,
  StyledBottomContainer,
  StyledTextInput
} from './styles';

function renderFormBody({
  errors,
  handleChange,
  handleSubmit,
  handleBlur,
  touched,
  isLoading
}) {
  return (
    <>
      <StyledForm>
        <StyledTextInput
          type="text"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          error={getError('email', errors, touched)}
        />
        <StyledSubmitButtonContainer>
          <StyledLink to={routes.signIn}>Sign in</StyledLink>
          <Button type="button" onClick={handleSubmit} isLoading={isLoading}>
            Reset
          </Button>
        </StyledSubmitButtonContainer>
        <StyledBottomContainer>
          <StyledLink to={routes.signUp}>Create an account</StyledLink>
        </StyledBottomContainer>
      </StyledForm>
    </>
  );
}

const initialValues = {
  email: ''
};

function ResetPassword() {
  const [isLoading, start, stop] = useLoadingSimulator(5000);

  React.useEffect(() => {
    return stop;
  }, []);

  return (
    <FormLayout title="Reset Password">
      <Formik
        initialValues={initialValues}
        validationSchema={changePasswordSchema}
        onSubmit={start}>
        {(props) => renderFormBody({ ...props, isLoading })}
      </Formik>
    </FormLayout>
  );
}

export default ResetPassword;
