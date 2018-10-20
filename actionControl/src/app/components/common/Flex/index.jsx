import React from 'react'
import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${props => Boolean(props.column) ? 'column' : 'row'};
    align-items: center;
    justify-content: center;
    align-content: center;
`

export default Flex;