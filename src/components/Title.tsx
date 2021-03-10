import styled from 'styled-components';
interface TitleProps {
  bg?:string;
  alignCenter?:boolean; 
  color?:string;

}

export default  styled.h1<TitleProps>`
  font-size:2rem;
  text-align:${props => props.alignCenter ? 'center' : ''};
  color:${props => props.color ? props.color : '#333'}

`;