import styled from 'styled-components';

type ButtonType = 'primary' | 'danger';
interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  name: ButtonType;
}

export default styled.button<ButtonProps>`
  padding: 1rem;
  border: none;
  outline: none;
  width: 200px;
  font-size: 1.125rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  background: ${(props) => (props.name === 'primary' ? 'var(--secondary-color)' : 'var(--accent-color)')};
  border-radius: 16px;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    transform: scale(0.8);
  }
`;
