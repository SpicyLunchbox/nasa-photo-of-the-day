import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Header(props) {
    const {nasaData, nasaTitle} = props
    return (
        <div className='container'>
            <h1>{nasaData.title}</h1>
        </div>
    )
}