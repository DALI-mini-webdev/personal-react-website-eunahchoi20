import React from 'react';
import food from './food.jpg'
import yellow from './MyGif.gif'
import red from './bird.jpg'
import dog from './dog.jpg'
import Navbar from './components/Navbar/Navbar';
import Button from './myButton.js';
import IceCreamBoard from './IceCreamComponents/IceCreamBoard';
import NameBoard from './components/namecreator/NameBoard';
import './App.css';
import Api from './APIfolder/Api.js'


function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="top">
          <h1> Welcome to My Website!</h1>
        </div>
       <div>
         <div className= "intro"> 
         <h2> Eunah Choi</h2>
       </div>
         <div className= "header">
          <h2> Economics major ||
                    Bates College '23 ||
                    Olympia, Washington 
          </h2>
       </div>
        <div>
          <h1>
            Here is some of my art: (Check it out!)
          </h1>
          <a href= "https://www.instagram.com/eunabstract/">
          <Button href= "https://www.instagram.com/eunabstract/"/>
          <h4> 
            Click Here to see my instagram account 
          </h4>
          </a>
        </div>
        <div> 
          <Api />
        </div>
        <div>
          <IceCreamBoard />
        </div>
        <div>
          <NameBoard />
        </div>
         <img src ={food} height="500px" width="500px" alt="food" />
         <img src= {yellow} height="500px" width="500px" alt="duck" />
        </div>
        <div>
          <img src={red} height="500px" width="500px" alt="bird" />
          <img src={dog} height="500px" width="500px" alt="dog"/>
        </div>
    </div>
  );
}

export default App;

