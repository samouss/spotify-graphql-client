import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: ${props => (props.size === 'small' ? '1.5rem' : '3rem')};
  text-align: ${props => props.textAlign || 'inherit'};
`;

export default Title;
