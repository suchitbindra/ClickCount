import './App.css';
import React, { useState } from 'react';
import sound from "./sounds/sound-1.mp3"
import side from "./list.png"
import cross from "./cross.png"
function App() {
   const [count ,setCount] = useState(0);
  function Counts(){
    setCount(count+1);
    new Audio(sound).play();
  }
   function show(){
    let box = document.getElementById('box');
    box.style.display = 'block';
   }
    function hide(){
      let box = document.getElementById('box');
      box.style.display = 'none';
    }
  return (
    <div>
      <nav>      
        <p className="logo"> Clicks</p>
        <a href="#" className='hide-1' id="active">Home </a>
        <a href="#" className='hide-1' >Contact Us </a>
        <a href="#" className='hide-1' >About Us</a>
        <img src={side} onClick={show} className='side'></img>
      </nav>
         <div id='box'>
               <img src={cross} onClick={hide} id='x'></img>
              <a href="#" id='home-1'> Home </a>
              <a href="#" id='contact-2'> Contact Us </a>
              <a href="#" id='about-3'> About Us </a>
         </div>

      <button id="btn-1" onClick={Counts}>Click Me!</button>
      <p className="Count-1">Count :</p>
      <p className="Display-count">{count}</p>
    </div>
  );
}

export default App;
