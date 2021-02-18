import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function Body(props) {
    const {nasaData} = props

    return (
        <div className='container'>
            <img src={nasaData.url} alt="NASA photo of the day"></img>
            <p>{nasaData.explanation}</p>           
        </div>
    )
}

