import React from 'react';
import { Formik } from 'formik';

import FormLayout from '../../components/FormLayout';
import Button from '../../components/Button';
import { signUpSchema } from './schema';
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
  values,
  dirty,
  isLoading,
  ...props
}) {
  return (
    <>
      <StyledForm>
        <StyledTextInput
          type="text"
          placeholder="Email or Phone "
          onChange={handleChange}
          onBlur={handleBlur}
          name="emailOrPhone"
          error={getError('emailOrPhone', errors, touched)}
        />
        <StyledTextInput
          type="password"
          placeholder="Password "
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          error={getError('password', errors, touched)}
        />
        <StyledTextInput
          type="password"
          placeholder="Confrim Password "
          onChange={handleChange}
          onBlur={handleBlur}
          name="confirmPassword"
          error={getError('confirmPassword', errors, touched)}
        />
        <StyledSubmitButtonContainer>
          <div />
          <Button type="button" onClick={handleSubmit} isLoading={isLoading}>
            Sign up
          </Button>
        </StyledSubmitButtonContainer>
        <StyledBottomContainer>
          <StyledLink to={routes.signIn}>Have an account already?</StyledLink>
        </StyledBottomContainer>
      </StyledForm>
    </>
  );
}

const initialValues = {
  emailOrPhone: '',
  password: '',
  confirmPassword: ''
};

function Signup() {
  const [isLoading, start, stop] = useLoadingSimulator(5000);

  React.useEffect(() => {
    return stop;
  }, []);

  return (
    <FormLayout title="Sign Up">
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={start}>
        {(props) => renderFormBody({ ...props, isLoading })}
      </Formik>
    </FormLayout>
  );
}

export default Signup;
