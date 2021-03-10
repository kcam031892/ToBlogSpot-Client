import { Link } from 'react-router-dom';
import styled from 'styled-components';
type NameType = 'primary' | 'danger';
interface LinkProps {
  className: NameType;
}

export default styled(Link)<LinkProps>`
  padding: 1rem;
  border: none;
  outline: none;
  width: 200px;
  font-size: 1.125rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  background: ${(props) => (props.className === 'primary' ? 'var(--secondary-color)' : 'var(--accent-color)')};
  border-radius: 16px;
  text-decoration: none;
  text-align: center;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    transform: scale(0.8);
  }
`;
