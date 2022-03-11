import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const {data} = await axios.get('http://localhost:8000')
    console.log(data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
