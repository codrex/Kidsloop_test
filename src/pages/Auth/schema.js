import { string, object, ref } from 'yup';

let emailOrPhoneRegx = new RegExp(/^(?:\d{10}|\w+@\w+\.\w{2,3})$/);
const emailOrPhoneMsg = 'Email or Phone number is required';

export const signUpSchema = object().shape({
  emailOrPhone: string()
    .matches(emailOrPhoneRegx, {
      excludeEmptyString: false,
      message: emailOrPhoneMsg
    })
    .required(emailOrPhoneMsg),
  password: string()
    .required('Password is required')
    .min(6, 'Password is too short - should be 6 chars minimum'),
  confirmPassword: string()
    .oneOf([ref('password'), null], "password don't match")
    .required('confirm password is required')
});

export const changePasswordSchema = object().shape({
  email: string().email().required('Email is required')
});

export const signInSchema = object().shape({
  emailOrPhone: string().required(emailOrPhoneMsg),
  password: string().required('Password is required')
});
