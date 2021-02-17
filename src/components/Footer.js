import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Footer(props) {
    const {nasaData} = props
    return (
        <div className='container'>
            <p>copyright: {nasaData.copyright}</p>
            <p>Date: {nasaData.date}</p>
        </div>
    )
}