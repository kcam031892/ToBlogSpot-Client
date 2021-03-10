import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';
import Button from '@components/Button';
import ErrorSpan from '@components/ErrorSpan';
import LoginSchemaValidation from '@validations/LoginSchemaValidation';

const FormLogin = styled(Form)`
  margin-top: 2.125rem;
`;
const Input = styled(Field)`
  background-color: #352258;
  border-radius: 8px;
  outline: 0;
  border: 0;
  color: #cfcfcf;
  padding: 1rem;
  font-size: 14px;
  width: 100%;
  margin-bottom: 1.25rem;
  &::placeholder {
    color: #cfcfcf;
  }
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.25rem;
`;

function LoginForm() {
  return (
    <>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={LoginSchemaValidation}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <FormLogin>
            {errors.username && touched.username ? <ErrorSpan>{errors.username}</ErrorSpan> : null}
            <Input placeholder='Enter username' name='username' />
            {errors.password && touched.password ? <ErrorSpan>{errors.password}</ErrorSpan> : null}
            <Input placeholder='Enter password' name='password' />
            <FlexCenter>
              <Button type='submit' name='primary'>
                Login
              </Button>
            </FlexCenter>
          </FormLogin>
        )}
      </Formik>
    </>
  );
}

export default LoginForm;
