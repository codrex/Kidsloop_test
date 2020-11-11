import React from 'react';
import { Formik } from 'formik';

import FormLayout from '../../components/FormLayout';
import Button from '../../components/Button';
import { useLoadingSimulator } from '../../hooks';
import { routes } from '../../contants';
import { getError } from '../../utils';
import { signInSchema } from './schema';
import {
  StyledForm,
  StyledLink,
  StyledSubmitButtonContainer,
  StyledBottomContainer,
  StyledTextInput
} from './styles';

const initialValues = {
  emailOrPhone: '',
  password: ''
};

function Login() {
  const [isLoading, start, stop] = useLoadingSimulator(5000);

  React.useEffect(() => {
    return stop;
  }, []);

  return (
    <FormLayout title="Sign In">
      <StyledForm>
        <Formik
          initialValues={initialValues}
          validationSchema={signInSchema}
          onSubmit={start}>
          {({ errors, handleChange, handleSubmit, handleBlur, touched }) => {
            return (
              <>
                <StyledTextInput
                  type="text"
                  placeholder="Email or Phone *"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="emailOrPhone"
                  error={getError('emailOrPhone', errors, touched)}
                />
                <StyledTextInput
                  type="password"
                  placeholder="Password *"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                  error={getError('password', errors, touched)}
                />
                <StyledSubmitButtonContainer>
                  <StyledLink to={routes.resetPassword}>
                    Forget password?
                  </StyledLink>
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    isLoading={isLoading}>
                    Sign in
                  </Button>
                </StyledSubmitButtonContainer>
                <StyledBottomContainer>
                  <StyledLink to={routes.signUp}>Create an account</StyledLink>
                </StyledBottomContainer>
              </>
            );
          }}
        </Formik>
      </StyledForm>
    </FormLayout>
  );
}

export default Login;
