import React from "react";
import Weather from "./Weather";
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York"/>

       <footer>
         This Project was coded by <a href="https://www.jessicablum.com">Jessica Blum</a> and is {" "} 
       <a href= "https://github.com/thelastkiss113/react-app"
       target="_blank"> open-sourced by GitHub
       </a>
       </footer>
    </div>
  </div>
  );
}

