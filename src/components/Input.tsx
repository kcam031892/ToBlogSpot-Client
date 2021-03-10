import styled from 'styled-components';

interface InputProps {
  type:string;
}

export default styled.input<InputProps>`
  width:100%;
  padding:1rem .25rem;
  outline:none;
  border:none;
  font-size:1rem;
  border-bottom:1px solid #333;
  color:gray;
`;