import SocialButton from '@components/SocialButton';
import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.125rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

function SocialLogin() {
  return (
    <Wrapper>
      <SocialButton Icon={FacebookIcon}></SocialButton>
      <SocialButton Icon={FacebookIcon}></SocialButton>
    </Wrapper>
  );
}

export default SocialLogin;
