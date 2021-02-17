import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from 'axios';
import Header from './components/Header.js'
import Body from './components/Body.js'
import Footer from './components/Footer.js'

function App() {
  const [nasaData, getNasaData] = useState(null)

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=nF0JhJArAhObF9dTZ7GdUjjtzKnifvobKbQTX1eP`)
    .then(res => {
      console.log(res)
      getNasaData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  return (
    <div className="App">
      {<Header />}
      {<Body />}
      {<Footer />}
    </div>
  );
}

export default App;
