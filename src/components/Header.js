import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
    100% {
        opacity: 1;
    }
`
const StyledHeader = styled.div`
opacity: 0;
animation: ${kf} 1.0s ease-in-out forwards;
`

export default function Header(props) {
    const {nasaData, nasaTitle} = props
    return (
        <StyledHeader>
            <h1>{nasaData.title}</h1>
        </StyledHeader>
    )
}