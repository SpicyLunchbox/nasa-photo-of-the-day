import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
    100% {
        opacity: 1;
    }
`

const StyledBody = styled.div`
opacity: 0;
animation: ${kf} 3.0s ease-in-out forwards;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: seagreen;
`

export default function Body(props) {
    const {nasaData} = props

    return (
        <StyledBody>
            <img src={nasaData.url} alt="NASA photo of the day"></img>
            <p>{nasaData.explanation}</p>
        </StyledBody>
    )
}

