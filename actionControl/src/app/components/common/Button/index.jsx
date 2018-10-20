import styled from 'styled-components';
import tinycolor from 'tinycolor2';

export default styled.button`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.blue};
  border: none;
  padding: 1rem 2rem;
  font-size: 2rem;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 1rem;
  border: 1px solid rgba(0, 0, 0, .12);

  :hover {
    background: ${({ theme }) => tinycolor(theme.blue).lighten(10).toString()};
  }
  
  :active {
    background: ${({ theme }) => tinycolor(theme.blue).lighten(20).toString()};
  }
`;
