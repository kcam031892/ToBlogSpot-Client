import React from 'react';
import styled from 'styled-components';
import Title from '@components/Title';
import Container from '@components/Container';
import LoginForm from '@pages/Login/LoginForm';
import SocialLogin from './SocialLogin';
// import Link from '@components/Link';
import Link from '@components/Link';

const Wrapper = styled.div`
  background-color: var(--primary-color);
  min-height: 100vh;
  width: 100%;
  padding-bottom: 2rem;

  > ${Container} > ${Title} {
    margin-top: 6.25rem;
    color: var(--accent-color);
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }
`;
const Heading = styled.h1`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  margin-top: 5.625rem;
`;
const SubHeading = styled.p`
  color: var(--seashell-color);
  font-size: 12px;
`;
const OR = styled.h1`
  font-size: 14px;
  color: #cfcfcf;
  font-weight: 700;
  margin-top: 2.375rem;
  text-align: center;
  overflow: hidden;
  &:before,
  &:after {
    background-color: #707070;
    content: '';
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 30%;
  }
  &:before {
    right: 0.5rem;
    margin-left: -50%;
  }
  &:after {
    left: 0.5rem;
    margin-right: -50%;
  }
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.25rem;
  > ${Link} {
    margin-top: 2.125rem;
  }
`;

function Login() {
  return (
    <Wrapper>
      {/* Container */}
      <Container>
        {/* App Title */}
        <Title alignCenter={true}>ToBlogSpot</Title>
        {/* Sign In Heading */}
        <Heading>Sign In</Heading>
        {/* Sign in SubHeading */}
        <SubHeading>Please sign in to continue</SubHeading>

        {/* Login Form */}
        <LoginForm />
        {/* OR */}
        <OR>OR</OR>
        {/* Social Login */}
        <SocialLogin />

        {/* Register Link */}
        <FlexCenter>
          <Link className='danger' to='/register'>
            Register
          </Link>
        </FlexCenter>
      </Container>
    </Wrapper>
  );
}

export default Login;
