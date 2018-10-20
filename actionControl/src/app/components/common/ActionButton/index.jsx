import React from 'react'
import styled from 'styled-components'

const getColor = props => props.bad ? props.theme.red : props.theme.green

const ButtonBase = styled.button`
    display: inline-flex;
    border-radius: 5px;
    border-style: solid;
    border-width: 2px;
    border-color: ${getColor};
    margin: 1rem;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${getColor};
    background-color: ${props => props.theme.background};
    line-height: 2rem;
    padding: 0;
    overflow: hidden;
    cursor: pointer;
    opacity: .7;
    transition: opacity .2s ease-in-out, transform .1s ease-in;
    will-change: opacity, transform;
    transform: translateY(0);
    transform-origin: center center;
    outline: none;

    :hover {
        opacity: 1;
        transform: translateY(-2px)
    }

    :active {
        transform: translateY(1px);
    }
`

const MainArea = styled.div`
    display: block;
    background-color: ${getColor};
    color: ${props => props.theme.background};
    padding: 0 1rem;
`

const ValueArea = styled.div`
    display: block;
    padding: 0 1rem;
`

const ActionButton = ({ score, children, ...props }) => (
    <ButtonBase
        {...props}
        good={score >= 0}
        bad={score < 0}
    >
        <MainArea
            good={score >= 0}
            bad={score < 0}
        >
            {children}
        </MainArea>
        {score !== undefined && (
            <ValueArea>
                {score}
            </ValueArea>
        )}
    </ButtonBase>
)

export default ActionButton;