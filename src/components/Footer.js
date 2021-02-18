import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
    100% {
        opacity: 1;
    }
`
const StyledFooter = styled.div`
opacity: 0;
animation: ${kf} 4.0s ease-in-out forwards;
`

export default function Footer(props) {
    const {nasaData} = props
    return (
        <StyledFooter>
            <p>copyright: {nasaData.copyright}</p>
            <p>Date: {nasaData.date}</p>
        </StyledFooter>
    )
}