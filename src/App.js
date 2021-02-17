import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/Header.js'
import Body from './components/Body.js'
import Footer from './components/Footer.js'

function App() {
  const [nasaData, getNasaData] = useState({})
  

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=nF0JhJArAhObF9dTZ7GdUjjtzKnifvobKbQTX1eP`)
    .then(res => {
      getNasaData(res.data)
      
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  
  return (
    <div className="App">
      {<Header nasaData={nasaData}/>}
      {<Body nasaData={nasaData}/>}
      {<Footer nasaData={nasaData}/>}
    </div>
  );
}

export default App;
