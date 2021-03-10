import React from 'react';
import styled from 'styled-components';
import { SvgIconComponent } from '@material-ui/icons';
interface SocialButtonProps extends React.HTMLProps<HTMLButtonElement> {
  Icon: SvgIconComponent;
}
const Button = styled.button`
  height: 2.75rem;
  width: 2.75rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  outline: none;
  &:active {
    transform: scale(0.7);
  }
  > .MuiSvgIcon-root {
    color: blue;
    font-size: 2rem;
  }
`;

function SocialButton({ Icon }: SocialButtonProps) {
  return (
    <Button>
      <Icon />
    </Button>
  );
}

export default SocialButton;
