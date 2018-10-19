import React from 'react';
import styled from 'styled-components';

const CenteredSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  svg {
    margin: 50px 0;
  }
`;


const Demo = () => (
  <CenteredSection>
    <h4>hello world!</h4>
  </CenteredSection>
);

export default Demo;
