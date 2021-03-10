import styled from 'styled-components';


export default styled.h1`
  font-size:14px;
  color:#CFCFCF;
  font-weight:700;
  margin-top:1rem;
  text-align:center;
  overflow:hidden;
  &:before,&:after {
    background-color:#707070;
    content:"";
    display:inline-block;
    height:1px;
    position:relative;
    vertical-align:middle;
    width:30%
  }
  &:before {
    right:0.5rem;
    margin-left:-50%;
  }
  &:after {
    left:0.5rem;
    margin-right:-50%;
  }
`;